import { useState } from 'react'
import { Link } from 'react-router-dom';

import uniqid from 'uniqid'

import { LIST_TYPES } from '../../config'
import AddButton from "./AddButton"
import DropDown from './DropDown';
import FormAddNewTask from './FormAddNewTask'

const List = (props) => {
    const { title, type, listTasks, allTasks, addNewTask, setTasks } = props
    const [isFormVisible, setFormVisible] = useState(false)

    const handleClick = () => {
        setFormVisible(!isFormVisible)
    }

    const formSubmit = (title) => {
        addNewTask(title)
        setFormVisible(false)
    }

    const activeTasks = allTasks.filter(task => task.status === 'backlog').length
    const readyTasks = allTasks.filter(task => task.status === 'ready').length
    const inProgressTasks = allTasks.filter(task => task.status === 'inProgress').length



    return (
        <div className="board-block">
            <div className='block-title'>
                {title}
            </div>
            <div className="list">
                {listTasks.map((task) => {
                    return (
                        <Link key={task.id} to={`/tasks/${task.id}`}>
                            <div
                                key={task.id}
                                className="task"
                            >
                                {task.title}
                            </div>
                        </Link>

                    )
                })}
            </div>

            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <FormAddNewTask
                    formSubmit={formSubmit}
                    setFormVisible={setFormVisible}
                />
            )}

            {!isFormVisible &&
                <AddButton
                    name='+Add card'
                    onClick={handleClick}
                    className='add-button'
                    buttonType="button"
                    disabled={(type === LIST_TYPES.READY && !activeTasks && 'disabled') || (type === LIST_TYPES.IN_PROGRESS && !readyTasks && 'disabled') || (type === LIST_TYPES.FINISHED && !inProgressTasks && 'disabled')}
                />
            }

            {type !== LIST_TYPES.BACKLOG && isFormVisible && (
                <DropDown
                    key={uniqid()}
                    blockType={type}
                    allTasks={allTasks}
                    setFormVisible={setFormVisible}
                    isFormVisible={isFormVisible}
                    addNewTask={addNewTask}
                    setTasks={setTasks}
                />
            )}
        </div>
    )
}

export default List