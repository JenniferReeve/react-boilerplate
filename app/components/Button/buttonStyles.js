import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  borderRadius: 2px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  fontSize: 16px;
  border: 2px solid #41addd;
  color: #41addd;
  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;