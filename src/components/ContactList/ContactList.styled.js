import styled from '@emotion/styled';

export const BoardContacts = styled.ul`
  border-radius: ${props => props.theme.spacing(3)};
  margin: 10px auto 0 auto;
  display: flex;
  gap: ${props => props.theme.spacing(2)};
  flex-direction: column;
`;

export const ContactsItem = styled.li`
  align-items: center;
  justify-content: start;
  width: 100%;
  box-shadow: ${props => props.theme.shadows.medium};
  background-color: ${props => props.theme.colors.white};
`;
