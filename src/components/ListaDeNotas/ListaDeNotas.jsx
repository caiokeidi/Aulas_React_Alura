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
          return (
            <li className='lista-notas_item' key={index}>
              <CardNotas titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
