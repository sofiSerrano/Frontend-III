import React from 'react'
import Item from './Item'
import lista from './data.json'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({handleClick}) {
  return (
    <div className='container'>
      {
        lista.map(element=> <Item productName={element.producto.nombre} description={element.producto.descripcion} cantStock={element.stock} plusFunction={handleClick}/>
        )
      }
    </div>
  )
}
