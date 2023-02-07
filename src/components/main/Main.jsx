import { Routes, Route } from 'react-router-dom';

import Board from './Board'
import TaskDetail from './TaskDetail'

const Main = (props) => {
	const { setTasks } = props;

	return (
		<main className='main-wrapper'>
			<Routes>
				<Route path="/" exact element={
					<Board
						{...props}
					/>
				} />
				<Route path="/tasks/:taskId" element={
					<TaskDetail
						{...props}

						setTasks={setTasks}
					/>
				} />
			</Routes>
		</main>
	)
}



export default Main