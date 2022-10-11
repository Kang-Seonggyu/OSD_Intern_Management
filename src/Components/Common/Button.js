import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  background: white;
  color: black;
  outline: none;
  cursor: pointer;
`

const StyledButton = styled.button`
    ${buttonStyle}
`;

const StyledLink = styled(Link)`
    ${buttonStyle}
`;
function Button (props) {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0 }/>
    ) : (
        <StyledButton {...props} />
    );
};

export default Button;