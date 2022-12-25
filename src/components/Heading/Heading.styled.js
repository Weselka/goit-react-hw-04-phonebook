import styled from '@emotion/styled';

export const Heading = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 900;
  color: ${props => props.theme.colors.dark};
  text-shadow: 1px 1px 2px ${props => props.theme.colors.gray};
  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-top: ${({ marginTop }) => (!marginTop ? 0 : marginTop)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
  // position: relative;
`;
