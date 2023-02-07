import { useState } from 'react'
import { useMatch, Link } from 'react-router-dom';

import closeImage from '../../assets/img/close.svg'

import TextArea from './TextArea'
import AddButton from './AddButton';

const TaskDetail = (props) => {
    const match = useMatch('tasks/:taskId')
    const { taskId } = match.params
    const { tasks, setTasks } = props

    const task = tasks.find(task => task.id === taskId)

    const [isFormVisible, setFormVisible] = useState(false)


    const changeVisible = () => {
        setFormVisible(!isFormVisible)
    }
    const [values, setValues] = useState('')

    const handleChange = e => {
        const fieldName = e.target.name
        setValues({ ...values, [fieldName]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newDiscription = values.description
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
				return {...task, description: newDiscription}
			}
			return task
		})
		setTasks(updatedTasks)
        setFormVisible(false)
    }

    return (
        <>
            <div className="detail-wrapper">
                {task ? (
                <>
                    <h1>{task.title}</h1>
    
                    {isFormVisible &&
                        <form onSubmit={handleSubmit} className="add-form" data-status={task.status} data-id={task.id}>
                            <TextArea
                                onChange={handleChange}
                                placeholder='Enter card description'
                                type='text'
                                name='description'
                                className='details-textarea'
                            />
                            <AddButton
                                name='Submit'
                                className='submit-button'
                                buttonType="submit"
                            />
                        </form>
                    }
    
                    {!isFormVisible &&
                        <div id='taskDetails'>
                            <div id="detailDescription">
                                {task.description || 'This task has no description'}
                            </div>
                            <AddButton
                                name='↻ Change description'
                                className='add-button'
                                buttonType="button"
                                onClick={changeVisible}
                            />
                        </div>
                    }
                </>
                ) : (<p>Task with ID {taskId} not found</p>)}

                <Link className='close-button' to='/' ><img src={closeImage} alt="close" /></Link>

            </div>
        </>
    )

}

export default TaskDetail