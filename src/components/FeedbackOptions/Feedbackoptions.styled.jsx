import styled from '@emotion/styled';

export const FeedbackBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const Button = styled.button`
  padding: 10px;
  min-width: 100px;
  background-color: #a6f4dc;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  font-size: 18px;

  &:hover {
    background-color: #af90a9;
  }

  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;
