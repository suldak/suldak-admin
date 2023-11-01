import styled from 'styled-components';

interface IProps {
  children?: React.ReactNode;
  gridColumn?: string;
}

interface IStyleProps {
  $gridColumn?: string;
}

const StyledBox = styled.div<IStyleProps>`
  background-color: ${(props) => props.theme.componentBgColor};
  border-radius: 0.25rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 1rem;
  grid-column: ${(props) => (props.$gridColumn ? `span ${props.$gridColumn}` : 'span 1')};
`;

const Box = ({ children, gridColumn }: IProps) => {
  return <StyledBox $gridColumn={gridColumn}>{children}</StyledBox>;
};

export default Box;
