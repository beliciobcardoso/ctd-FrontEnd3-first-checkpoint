//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  let corStyle = {
    background: props.dataCor.cor,
  };
  return (
    <div style={corStyle}>
      <p>{props.dataCor.nome}</p>
      <p>{props.dataCor.cor}</p>
    </div>
  );
}
