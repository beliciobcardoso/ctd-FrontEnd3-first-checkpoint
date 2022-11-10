//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  let corStyle = {
    backgroundColor: props.dataCor.cor,
    width: '250px',
    height: '120px',
    padding: '0 20px 20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  };
  return (
    <div style={corStyle}>
      <p>{props.dataCor.nome}</p>
      <p style={{ textTransform: 'uppercase' }}>{props.dataCor.cor}</p>
    </div>
  );
}
