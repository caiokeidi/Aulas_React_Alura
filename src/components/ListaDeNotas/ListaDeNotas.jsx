import React, { Component } from "react";
import CardNotas from "../CardNota";
import './estilo.css'


class ListaDeNotas extends Component {
  //Não precisamos criar esse constructor aqui, pois quando só queremos herdar as propriedades, o js faz isso automaticamente
  //sem precisar criar esse constructor.
  //constructor(props){
  //  super(props)
  //}

  render() {
    return (
      <ul className='lista-notas'>
        {this.props.notas.map((nota, index) => {
          {console.log(nota)}
          return (
            <li className='lista-notas_item' key={index}>
              <CardNotas 
              indice = {index}
              apagarNota = {this.props.apagarNota}
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria = {nota.categorias}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
