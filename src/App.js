import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeNotas from './components/ListaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      notas:[],
      categorias:["Trabalho", "Esportes"]
    }
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1)
    this.setState({notas:arrayNotas})
  }

  adicionarCategoria(nome){
    const novoArrayCategorias = [...this.state.categorias, nome]
    const novoEstado = {...this.state, categorias:novoArrayCategorias}
    this.setState(novoEstado)
  }


  render(){
    return (
    <section className='conteudo'>
      <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
      <main className="conteudo-principal">
        <ListaDeCategorias 
          adicionarCategoria = {this.adicionarCategoria.bind(this)}
          categorias = {this.state.categorias}/>
        <ListaDeNotas
        apagarNota={this.deletarNota.bind(this)}
        notas={this.state.notas}/>
      </main>
      
    </section>
    
  );
}
}

export default App;
