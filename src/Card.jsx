//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div>
      <p>{props.dataCor.nome}</p>
      <p>{props.dataCor.cor}</p>
    </div>
  );
}
