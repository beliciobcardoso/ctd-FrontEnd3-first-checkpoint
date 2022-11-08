// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nome, setNome] = useState('');
  const [cor, setCor] = useState('');
  const [cores, setCores] = useState([]);

  console.log(cor);

  function cadastraCor(event) {
    event.preventDefault();

    const novaCor = {
      nome: nome,
      cor: cor,
    };

    if (nome < 3) {
      alert('Campo do nome vazio');
    } else if (cor.length < 6) {
      alert('Telefone é menor que o padrão');
    } else {
      setCores([...cores, novaCor]);
      setNome('');
      setCor('');
    }
  }

  return (
    <div className='App'>
      <h1>Adicionar nova cor</h1>
      <form>
        <label htmlFor='nome'>Nome</label>
        <Input
          id='nome'
          type='text'
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <label htmlFor='cor'>Cor</label>
        <Input
          id='cor'
          type='color'
          value={cor}
          onChange={(event) => setCor(event.target.value)}
        />
        <Button type='submit' onClick={(event) => cadastraCor(event)}>
          Adicionar
        </Button>
      </form>
      <section>
        <h1>Cores Favoritas</h1>
        <div>
          {cores.map((cor, index) => {
            return <Card key={index} dataCor={cor} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
