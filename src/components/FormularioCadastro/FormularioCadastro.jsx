import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props){
    super(props); //Preciso chamar isso por conta do Component que estou herdando.
    this.titulo = '';
    this.texto = '';
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation(); //Evitar propagação do evento na árvore de execução.
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation(); //Evitar propagação do evento na árvore de execução.
    this.texto = evento.target.value
  }

  _criarNota(evento){
    evento.preventDefault(); //Parar comportamento padrão de reiniciar a página ao dar submit
    evento.stopPropagation(); //Evitar propagação do evento na árvore de execução.
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}  
      >
        <input
          type="text"
          placeholder="título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro-_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
