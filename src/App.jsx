
import './App.css'


let personagem = {
  nome: 'Homem-Aranha',
  poder: 'Lançar Teia',
  altura: '1,77',
  peso: '75kg',
  salario: '1200',

}





function App() {

  return (
  <>

    <h1>Nome: { personagem.nome}</h1><br />
    <h2>Poder: {personagem.poder}</h2>
    <h2>Altura: {personagem.altura}</h2>
    <h2>Peso: {personagem.peso}</h2>
    <h2>Salario: {personagem.salario}</h2>


  </>
  )
}

export default App
