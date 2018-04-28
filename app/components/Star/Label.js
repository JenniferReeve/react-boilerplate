import styled from 'styled-components';

const Label = styled.label`
    float: right;
    cursor: ${ props => props.editing ? 'pointer' : 'default'};
`;

export default Label;



