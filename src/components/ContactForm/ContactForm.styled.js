import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.spacing(5)};
  font-weight: 700;
  gap: 15px;
`;

export const Input = styled.input`
  padding: ${props => props.theme.spacing(1)}
   ${props => props.theme.spacing(0)}
   ${props => props.theme.spacing(3)} 
   ${props => props.theme.spacing(0)};
`;

export const Button = styled.button`
  align-self: flex-start;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  border-radius: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.dark};
`;
