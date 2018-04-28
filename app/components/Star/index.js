import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input.js';
import StarLabel from './StarLabel.js'
import EmptyStarLabel from './EmptyStarLabel.js'


class Star extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    starCount: 5,
    editing: true,
    starColor: '#ffb400',
    emptyStarColor: '#333'
  };

  constructor(props) {
    super();

    this.state = {
      value: props.value
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;

    if (value != null && (value !== this.state.value)) {
      this.setState({ value });
    }
  }

  onChange(inputValue) {
    const { editing, value } = this.props;

    if (!editing) {
      return;
    }   
    
    // do not update internal state based on input value if prop passed
    if (value != null) {
      return;
    }

    this.setState({value: inputValue});
  }

onStarClick(index, value, name, e) {
    e.stopPropagation();

    const { onStarClick, editing } = this.props;

    if (!editing) {
      return;
    }

    onStarClick && onStarClick(index, value, name, e);
  }

  onStarHover(index, value, name, e) {
    e.stopPropagation();

    const { onStarHover, editing } = this.props;

    if (!editing) {
      return;
    }

    onStarHover && onStarHover(index, value, name, e);
  }

  onStarHoverOut(index, value, name, e) {
    e.stopPropagation();

    const { onStarHoverOut, editing } = this.props;

    if (!editing) {
      return;
    }

    onStarHoverOut && onStarHoverOut(index, value, name, e);
  }

  renderStars() {
    const {
      name,
      starCount,
      starColor,
      emptyStarColor,
      editing
    } = this.props;
    const { value } = this.state;

    // populate stars
    let starNodes = [];

    for (let i = starCount; i > 0; i--) {
      const id = `${name}_${i}`;
      const starNodeInput = (
        <Input
          key={`input_${id}`}
          className="dv-star-rating-input"
          type="radio"
          name={name}
          id={id}
          value={i}
          checked={value === i}
          onChange={this.onChange.bind(this, i, name)}
        />
      );
      const starNodeLabel = value >= i ? (
        <StarLabel
          key={`label_${id}`}
          className={'dv-star-rating-star ' + 'dv-star-rating-full-star'}
          htmlFor={id}
          onClick={e => this.onStarClick(i, value, name, e)}
          onMouseOver={e => this.onStarHover(i, value, name, e)}
          onMouseLeave={e => this.onStarHoverOut(i, value, name, e)}> 

          {this.renderIcon(i, value, name, id)}
        </StarLabel>
      ) :  
      (
        <EmptyStarLabel
          key={`label_${id}`}
          className={'dv-star-rating-star ' + 'dv-star-rating-empty-star'}
          htmlFor={id}
          onClick={e => this.onStarClick(i, value, name, e)}
          onMouseOver={e => this.onStarHover(i, value, name, e)}
          onMouseLeave={e => this.onStarHoverOut(i, value, name, e)}> 

          {this.renderIcon(i, value, name, id)}
        </EmptyStarLabel>
      );

      starNodes.push(starNodeInput);
      starNodes.push(starNodeLabel);
    }

    return starNodes.length ? starNodes : null;
  }

  renderIcon(index, value, name, id) {
    const { renderStarIcon, renderStarIconHalf } = this.props;

    if (
      typeof renderStarIconHalf === 'function' &&
      Math.ceil(value) === index &&
      value % 1 !== 0
    ) {
      return renderStarIconHalf(index, value, name, id);
    }

    if (typeof renderStarIcon === 'function') {
      return renderStarIcon(index, value, name, id);
    }

    return <i key={`icon_${id}`} style={{fontStyle: 'normal'}}>&#9733;</i>;
  }



  render() {
    const { editing, className } = this.props;

    return (
      <div style={{display: 'inline-block', position: 'relative'}} >
        {this.renderStars()}
      </div>
    );
  }
}

Star.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    editing: PropTypes.bool,
    starCount: PropTypes.number,
    starColor: PropTypes.string,
    emptyStarColor: PropTypes.string,
    onStarClick: PropTypes.func,
    onStarHover: PropTypes.func,
    onStarHoverOut: PropTypes.func,
    renderStarIcon: PropTypes.func,
    renderStarIconHalf: PropTypes.func
};

export default Star;
