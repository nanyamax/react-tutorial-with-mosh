import { useState } from 'react';
import ButtonAlert from './ButtonAlert';

interface Props {
  children: string;
}
const SingleButton = ({ children }: Props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        {children}
      </button>
      {show && <ButtonAlert />}
    </>
  );
};

export default SingleButton;
