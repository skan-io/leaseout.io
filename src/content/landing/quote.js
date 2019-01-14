import React from 'react';
import {
  Carousel,
  CarouselItem
} from 'reactstrap';
import person1 from '../../logos/team-1.jpg';
import person2 from '../../logos/team-4.jpg';
import person3 from '../../logos/team-3.jpg';
import person4 from '../../logos/team-5.png';
import person5 from '../../logos/team-6.jpeg';


const shuffleArray = (array)=> {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const items = shuffleArray([
  {
    src: person5,
    quote: 'LeasePlease has streamlined my day by making it simple to find the right tenant',
    quoteBy: 'Fiona Üterall',
    role: 'Property Manager',
    company: 'Belle Properties'
  },
  {
    src: person1,
    quote: 'I guess maybe its the way I look, but until LeasePlease no one believed my perfect rental record',
    quoteBy: 'Sam Johnston',
    role: 'Photographer',
    company: 'The Independent'
  },
  {
    src: person4,
    quote: 'I reccomend to everyone who I see in mediation to get a LeasePlease account, it makes everything so much easier.',
    quoteBy: 'Michael Lewis',
    role: 'Senior Arbitrator',
    company: 'NSW Tenancy Tribunal'
  },
  {
    src: person2,
    quote: 'I just got back from overseas and all my rental history was right there, super easy to access again',
    quoteBy: 'Jennifer Sainsbury',
    role: 'World Traveller',
    company: 'Living out of her suitcase'
  }
]);

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeIndex: 0};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) {
      return;
    }
    const nextIndex = this.state.activeIndex === items.length - 1
      ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex: nextIndex});
  }

  previous() {
    if (this.animating) {
      return;
    }
    const nextIndex = this.state.activeIndex === 0
      ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex: nextIndex});
  }

  goToIndex(newIndex) {
    if (this.animating) {
      return;
    }
    this.setState({activeIndex: newIndex});
  }

  render() {
    const {activeIndex} = this.state;

    const slides = items.map((item, index)=> (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={index}
      >
        <div className="media media-comment">
          <img
            alt="Image placeholder"
            className="avatar avatar-lg media-comment-avatar rounded-circle quote-img"
            src={item.src}
          />
          <div className="media-body">
            <div className="media-comment-text">
              <h6 className="h5 mt-0 quote-title">{item.quoteBy}</h6>
              <blockquote className="blockquote">
                <p className="mb-0 quote-text">
                  {`"${item.quote}"`}
                </p>
                <footer className="blockquote-footer">{item.role}
                  <cite title="Source Title">{item.company}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </CarouselItem>
    ));

    return (
      <section className='quoteCarousel-main'>
        <div className='quoteCarousel-container'>
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            {slides}
          </Carousel>
        </div>
      </section>
    );
  }
}


export default Example;
