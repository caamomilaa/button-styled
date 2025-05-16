import { useState } from 'react';
import { StyledSquare } from './square.styles';

const Square = () => {
  const [color, setColor] = useState(false);
  return (
    <>
      <StyledSquare color={color}></StyledSquare>
      <button onClick={() => setColor(!color)}>Change Color</button>
    </>
  );
};
export default Square;
