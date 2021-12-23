import {useState} from "react";
import {useNavigate} from "react-router-dom"

const Form = ({initialProduct, handleSubmit, buttonLabel}) => {
    const navigate = useNavigate()
    
    // The Form State
    const [formData, setFormData] = useState(initialProduct)

    // Handle Change to Update State when Input changes
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // HandleSubmit for when the form submitted
    const handleSubmission = (event) => {
        // prevent the page from refresh
        event.preventDefault()
        // pass the formData to the handleSubmit function passes as props
        handleSubmit(formData)
        // push user back to main page
        navigate("/")

    }

    return <form onSubmit={handleSubmission}>
        Name: <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"/> 
         Description: <input
            type="text"
            onChange={handleChange}
            value={formData.description}
            name="description"
            />
        Price: <input
            type="text"
            onChange={handleChange}
            value={formData.price}
            name="price"
            />
        Url: <input
            type="text"
            onChange={handleChange}
            value={formData.url}
            name="url"
            />
        Category: <input
            type="text"
            onChange={handleChange}
            value={formData.category}
            name="category"
            />
            <input type="submit" value={buttonLabel}/>
    </form>
};

export default Form;