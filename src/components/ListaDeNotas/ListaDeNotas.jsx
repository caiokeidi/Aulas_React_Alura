import React, { Component } from "react";
import CardNotas from "../CardNota";
import './estilo.css'


class ListaDeNotas extends Component {
  render() {
    return (
      <ul className='lista-notas'>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li className='lista-notas_item' key={index}>
              <CardNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
