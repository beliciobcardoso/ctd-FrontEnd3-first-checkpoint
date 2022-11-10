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

  const [formularioErro, setFormularioErro] = useState(false);
  const [inpuntNome, setInpuntNome] = useState(false);
  const [inputCor, setInputCor] = useState(false);

  console.log(nome);

  function cadastraCor(event) {
    event.preventDefault();

    console.log(cor);
    const novaCor = {
      nome: nome.trim(),
      cor: cor,
    };

    if (nome.length < 3 && cor.length < 6) {
      setFormularioErro(true);
      setInpuntNome(true);
      setInputCor(true);
    } else if (nome.length < 3) {
      setFormularioErro(true);
      setInpuntNome(true);
      setInputCor(false);
    } else if (cor.length < 6) {
      setFormularioErro(true);
      setInputCor(true);
      setInpuntNome(false);
    } else {
      setFormularioErro(false);
      setInputCor(false);
      setInpuntNome(false);
      setCores([...cores, novaCor]);
      setNome('');
      setCor('');
    }
  }

  return (
    <div className='App'>
      <form className={formularioErro ? 'form-error' : ''}>
        <h1>Adicionar nova cor</h1>
        <div>
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
        </div>
        <Button type='submit' onClick={(event) => cadastraCor(event)}>
          Adicionar
        </Button>
      </form>
      <p className={inpuntNome ? 'inpuntNome-error' : ''}></p>
      <p className={inputCor ? 'inputCor-error' : ''}></p>
      <section>
        <h1>Cores Favoritas</h1>
        <div className='card'>
          {cores.map((cor, index) => {
            return <Card key={index} dataCor={cor} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
