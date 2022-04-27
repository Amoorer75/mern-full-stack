import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout';
import ItemForm from '../shared/ItemForm';


export default function ItemCreate(){
    const navigate = useNavigate();
    const [foodItem,setFoodItem] = useState({
        name: '',
        price: 0,
        type: ''
    })
    const [createdItem, setCreatedItem] = useState(null)

    const handleChange = (event) => {
        const updatedField = {[
            event.target.name]: event.target.value   
        }

        const editedItem = Object.assign(foodItem, updatedField)

        setFoodItem(editedItem)
    }

    const handleSubmit =(event) => {
        event.preventDefault()

        axios({
            url:`http://localhost:3000/api/groceryitems`,
            method: 'POST',
            data: foodItem
        }).then(res => setCreatedItem(res.data.item)).catch(console.error)
    }

    useEffect(() => {
        if (createdItem) {
          return navigate(`/shoping-list-items`)
        }
      }, [createdItem, navigate])

    return (
     <Layout>
         <ItemForm 
         
         items={foodItem}
        handleSubmit={(e) => handleSubmit(e)}
        handleChange={(e) => handleChange(e)}       
         cancelPath='/'
         
         />
     </Layout>
    )
}