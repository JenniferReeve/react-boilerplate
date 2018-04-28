import styled from 'styled-components';

import Label from './Label.js';

const EmptyStarLabel = Label.extend`
    color: ${ props => props.emptyStarColor };
`;

export default EmptyStarLabel;



