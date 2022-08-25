import React, {useState} from 'react'

const ItemCount = () => {
    const [counter, setCounter] = useState(0) 
    const [stock, setStock] = useState(6)

    const handlerCounterUp = () => {
        if(stock > 0) {
        setCounter(counter +1)
        setStock(stock -1)
        }
    }

    const handlerCounterDown = () => {
        if(counter > 0) {
        setCounter(counter - 1)
        setStock(stock +1)
        }
    }



    const styles = {
        count: {
            backgroundColor: "grey",
            fontSize: "1.5rem",
            padding: "1rem",
            textAlign: "center",
            margin: "1rem 0rem",
            
        },
        countBtn: {
            padding: "0.3rem 0.5rem",
            marginLeft: "0.2rem",
            backgroundColor: "red",
            border: "none",
            borderRadius: "0.2rem"
        },        
    }

  return (
    <>
        <div style={styles.count}>
            <p>Count : {counter}</p>
            <p>Stock: {stock}</p>
            <button style={styles.countBtn} onClick={handlerCounterUp}>+</button>      
            <button style={styles.countBtn} onClick={handlerCounterDown}>-</button>      
        </div>
    </>
  )
}

export default ItemCount