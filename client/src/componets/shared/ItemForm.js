import {Link} from 'react-router-dom'

export default function ItemForm({items, handleSubmit, handleChange, cancelPath}) {


    return(
       
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Title</label>
            <input placeholder="chicken"  defaultValue={items.value} name="name" onChange={(e) => handleChange(e)} />        
            <input placeholder="5.00" defaultValue={items.value } name="price" onChange={(e) => handleChange(e)} />            
            <input placeholder="meat" defaultValue={items.value} name="type" onChange={(e) => handleChange(e)} />

            <button type="submit">Submit</button>

            <button><Link to={cancelPath}>cancel</Link></button>
        </form>
        

    )
}