import { FC, MouseEventHandler, useRef, useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 38px;
  white-space: nowrap;
  width: 100%;
  min-width: auto;
  height: 40px;
  padding: 0px 25px;
  border-radius: 4px;
  font-size: 0.875rem;
  margin: 0px;
  color: rgb(102, 102, 102);
  background-color: #fff;
  border: 1px solid rgb(234, 234, 234);
  transition: all 0.2s ease 0s;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    border-color: #000;
    color: #000;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

interface RevalidateButtonProps {
  error: Error;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const RevalidateButton: FC<RevalidateButtonProps> = ({ onClick, error }) => {
  const timer = useRef<NodeJS.Timer | null>(null);
  const [time, setTime] = useState(0);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    setTime(5);

    timer.current = setInterval(() => {
      setTime((prev) => (prev === 0 ? 0 : prev - 1));
    }, 1000);
  };

  return (
    <Button
      disabled={time !== 0}
      onClick={(event) => {
        startTimer();
        onClick(event);
      }}
    >
      {error.message}
      {' :( '}
      {time === 0
        ? 'Click here to try again.'
        : `Click here after ${time} seconds.`}
    </Button>
  );
};

export { RevalidateButton };
