import styled from '@emotion/styled';

export const ContactText = styled.p`
  color: ${props => props.theme.colors.dark};
  font-weight: 900;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const ButtonDelete = styled.button`
  align-self: flex-start;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  border-radius: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.red};
`;

export const ContactsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;