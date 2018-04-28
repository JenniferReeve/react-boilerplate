/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SearchBar from 'components/SearchBar';
import StarRating from 'components/Star';
import { Button, Paper } from 'material-ui';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
   constructor() {
    super();

    this.state = {
      rating: 1,
    };
  }
  
  onStarClick(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div>
        <Paper>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>

          <Button>Test</Button>
        </Paper>
      </div>
    );
  }
}
