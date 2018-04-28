import styled from 'styled-components';

import Label from './Label.js';

const StarLabel = Label.extend`
    color: ${ props => props.starColor };
`;

export default StarLabel;



