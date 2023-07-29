import React from 'react'
import { Button } from '@mui/material'

const ItemCount = ({ stock, addToCarrito }) => {
    const [counter, setCounter] = React.useState(1)


    const handleAdd = () => {
      if (counter < stock) {
        setCounter(counter + 1);
      }
    }

    const handleSubstract = () => {
      if (counter <= 1) {
        return;
      }
      setCounter(counter -1)
    }

    const handleCarrito = () => {
      addToCarrito(counter);
      setCounter(1);
    }
    
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <Button onClick={handleSubstract} color='secondary'>-</Button>
            <p>{counter}</p>
          <Button onClick={handleAdd}color='primary'>+</Button>
        </div>
    <Button onClick={handleCarrito} size="small">Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount