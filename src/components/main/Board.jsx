import uniqid from 'uniqid'
import { LIST_TYPES, LIST_COPY } from '../../config'
import List from './List'

const Board = (props) => {
    const { tasks, setTasks } = props;

    const addNewTask = (title, description) => {
		const task = {
			id: uniqid(),
			title,
			status: 'backlog',
		}

		setTasks([...tasks, task]);
	}

    return (
        <div className="board-wrapper">
            {
                Object.values(LIST_TYPES).map((type) => {
                    const listTasks = tasks.filter(task => task.status === type)

                    return (
                        <List
                            key={type}
                            type={type}
                            title={LIST_COPY[type]}
                            allTasks={tasks}
                            listTasks={listTasks}
                            addNewTask={addNewTask}
                            setTasks={setTasks}
                        />
                    )
                })
            }
        </div>
    )
}

export default Board