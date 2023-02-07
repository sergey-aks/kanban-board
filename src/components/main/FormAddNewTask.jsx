import { useState } from 'react'
import Input from "./Input"
import AddButton from "./AddButton"

const FormAddNewTask = (props) => {
    const { formSubmit } = props
    const [values, setValues] = useState({
        title: ''
    })

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({ ...values, [fieldName]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (values.title) {
            formSubmit(values.title)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <Input
                value={values.title}
                onChange={handleChange}
                type='text'
                id='taskTitle'
                name='title'
                className='input-add-card'
            />
            <AddButton
                name='Submit'
                className='submit-button'
                buttonType="submit"
            />
        </form>
    )
}

export default FormAddNewTask