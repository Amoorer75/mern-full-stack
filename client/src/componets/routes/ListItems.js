import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function ListItems(){
    const [foodItems,setFoodItems] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios('http://localhost:3000/api/groceryitems')

            console.log(response.data.items)

            setFoodItems(response.data.items)

        }catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
       
        fetchData()
        
    },[])

    const groceryitems = foodItems.map((item) => {
        return (
        <li key={item._id} className = 'hover-item'>
            <NavLink to={`/shoping-list-items/${item._id}`}>
                {item.name}
            </NavLink>
            <p>${item.price}.00</p>
        </li>
        )
    })

    return(
        <div className="">
            <h2>Shopping List</h2>

            <ul>
                {groceryitems}
            </ul>


        </div>
    )
}