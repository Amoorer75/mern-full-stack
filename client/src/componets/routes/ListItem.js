import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'

export default function ListItem(){
    const [foodItem,setFoodItem] = useState([])
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate()

    const fetchData = async () => {
        try {
            const response = await axios(`http://localhost:3000/api/groceryitems/${id}`)
            console.log(response)
            const result = response.data.item
            setFoodItem(result)
        }catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    useEffect(() => {
        if (!foodItem) {
          return <p>Loading...</p>
        }
      }, [foodItem])
    
      const destroy = () => {
       axios({
          url: `http://localhost:3000/api/groceryitems/${id}`,
          method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
      }
    
      useEffect(() => {
        if (deleted) {
          return navigate("/")
        }
      }, [deleted, navigate])
    
      
    
      return (
    
        
    
        <Layout>
    
          <h4>{foodItem.name}</h4>
          <p>Price ${foodItem.price}.00</p>
          <p>Type:{foodItem.type}</p>
          <button onClick={(e) => destroy(e)} >Delete Item</button>
    
          <NavLink to={`/shoping-list-items/${id}/edit`} >
            <button>Edit</button>
          </NavLink>
    
          <NavLink to="/shoping-list-items" >Back to all items</NavLink>
          
        </Layout>
      )
    }