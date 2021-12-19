import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    opacity: 0.7;
  }
`;
