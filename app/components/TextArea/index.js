import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    return (
      <textarea rows={this.props.row} cols={this.props.cols}>
      </textarea>
    );
  }
}

TextArea.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number
};

export default TextArea;
