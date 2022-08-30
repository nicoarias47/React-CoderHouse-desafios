import React,{useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const ItemList = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character?")
            .then((resp) => resp.json())
            .then((data) => setUsers(data.results));   
        }, [])
        
    
    return (
    <div>
        {users.map((user) => <ItemListContainer data={user} key={user.id} />
            
        )}
    </div>    
  )
}

export default ItemList