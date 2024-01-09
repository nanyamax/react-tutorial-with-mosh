interface Props {
  texts: string[];
  onClick: () => void;
}

function Button({ texts, onClick }: Props) {
  const colors = [
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-warning',
    'btn-info',
    'btn-light',
    'btn-dark',
    'btn-link',
  ];
  return (
    <>
      {colors.map((color, index) => (
        <button
          type="button"
          className={`btn ${color}`}
          key={color}
          onClick={onClick}>
          {texts[index]}
        </button>
      ))}
    </>
  );
}
export default Button;
