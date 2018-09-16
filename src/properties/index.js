import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardPreview,
  DocumentCardTitle
} from 'office-ui-fabric-react/lib/DocumentCard';
import {H1} from 'rambler-ui/Typography';
import {staticMapByName} from '../config';
import theme from './theme.css';

const mapImageWidth = 400;
const mapImageHeight = 300;
const mapImageZoom = 18;


const generatePreviewProps = (locations)=> {
  const previewImageProps = [];

  for (const location of locations) {
    previewImageProps.push({
      name: location,
      previewImageSrc: staticMapByName(
        location, mapImageWidth*2, mapImageHeight*2, mapImageZoom
      ),
      width: mapImageWidth,
      height: mapImageHeight
    });
  }

  return previewImageProps;
};

const createCards = (previews)=> {
  const cards = [];
  let key = 0;

  for (const preview of previews) {
    cards.push(
      <DocumentCard
        onClickHref='www.google.com'
        key={key}
        className={theme.propertyColumns}
      >
        <DocumentCardPreview previewImages={[preview]} />
        <DocumentCardTitle
          title={preview.name}
          shouldTruncate={true}
        />
        <DocumentCardActivity
          activity="Created a few minutes ago"
          people={[{name: 'Annie Lindqvist'}, {name: 'Jeff Jefferson'}]}
        />
      </DocumentCard>
    );
    key += 1;
  }

  return cards;
};


class PropertyCards extends React.Component {
  // eslint-disable-next-line
  static propTypes = {
    propertyLocations: PropTypes.array
  }

  constructor(props) {
    super(props);

    this.previewImages = [];
    // this.setState({hasProps: false});
    const locations = [
      '1/7 Linell St, Kincumber, NSW', '4 Nurragi Cl, Avoca Beach, NSW'
    ];
    this.previewImages = generatePreviewProps(/* propertyLocations */ locations);
    this.cards = createCards(this.previewImages);
  }

  componentDidUpdate() {
    const {propertyLocations} = this.props;
    const locations = [
      '1/7 Linell St, Kincumber, NSW', '4 Nurragi Cl, Avoca Beach, NSW'
    ];
    this.previewImages = generatePreviewProps(/* propertyLocations */ locations);
    this.cards = createCards(this.previewImages);
    this.setState({hasProps: true});
  }


  render() {
    if (this.previewImages.length > 0) {
      return (
        <div className={theme.homePropertyColumns}>
          {this.cards}
        </div>
      );
    }

    return (
      <div style={{textAlign: 'center'}}>
        <H1 style={{textAlign: 'center', paddingTop: '100px'}}>Loading...</H1>
      </div>
    );
  }
}

const mapStateToProps = ({properties})=> ({
  locations: properties.locations
});

export default connect(mapStateToProps)(PropertyCards);
