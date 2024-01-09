import { useState } from 'react';

const ButtonAlert = () => {
  const [show, setShowItem] = useState(true);
  if (show)
    return (
      <>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert">
          <strong>Alert!</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowItem(false)}></button>
        </div>
      </>
    );
};

export default ButtonAlert;
