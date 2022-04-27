import {useEffect, useState,} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Layout from '../shared/Layout'
import ItemForm from '../shared/ItemForm'
import axios from 'axios'

export default function ItemEdit(){
    const navigate = useNavigate()
    const { id } = useParams()  //get the id from the current object to update
    const [foodItem, setFoodItem] = useState({
        name: '',
        price: 0,
        type: '',
    })
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
       try {
           const response = await axios(`http://localhost:3000/api/groceryitems`)
           console.log(response)
           setFoodItem(response.data)
       } catch (error) {
           console.log(error)
       }
      }
      fetchData()
    }, [])

    const handleChange = (event) => {
  
        const updatedField = { [event.target.name] : event.target.value }
     
        const editedItem = Object.assign(foodItem, updatedField)
   
        setFoodItem(editedItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         axios({
             url: `http://localhost:3000/api/groceryitems/${id}`,
             method: 'PUT',
             data: foodItem
         }).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect(() => {
        if(updated) {
            return navigate(`/shoping-list-items/${id}`)
        }
    })

     return(
         <Layout>
             <ItemForm
               items={foodItem}
               handleChange={(e) => handleChange(e)}
               handleSubmit={(e) => handleSubmit(e)}
               cancelPath={`/shoping-list-items/${id}`}
               />
         </Layout>
      )
    }