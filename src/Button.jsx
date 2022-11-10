export function Button(props) {
  let buttonStyle = {
    backgroundColor: 'green',
    width: '100px',
    height: '50px',
    borderRadius: '10px',
    fontWeight: '900',
    cursor: 'pointer',
    border: 'none',
  };

  return (
    <>
      <button
        style={buttonStyle}
        className='button'
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
}
