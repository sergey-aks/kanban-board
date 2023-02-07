const Footer = (props) => {
	const {activeTasks, finishedTasks} = props
	return (
		<footer className='footer'>
			<div className='block'>Active tasks: {activeTasks}</div>
			<div className='block'>Finished tasks: {finishedTasks}</div>
		</footer>
	)
}

export default Footer