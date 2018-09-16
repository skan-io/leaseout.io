import React from 'react';
import PropTypes from 'prop-types';

class ChangeHandler extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    infoKey: PropTypes.string,
    onChange: PropTypes.func,
    fireChangeOnMount: PropTypes.bool
  };

  componentDidMount() {
    if (this.props.fireChangeOnMount) {
      this.props.onChange();
    }
  }

  componentDidUpdate() {
    const {infoKey: newKey} = this.props;
    if (this.currentInfoKey !== newKey) {
      this.currentInfoKey = newKey;
      this.props.onChange();
    }
  }

  render() {
    return null;
  }
}

export default ChangeHandler;
