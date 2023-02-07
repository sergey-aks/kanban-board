import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css';

// import data from './mock.json'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

function App() {
  // const [tasks, setTasks] = useState(data)

  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)
  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const activeTasks = tasks.filter(task => task.status === 'backlog').length
  const finishedTasks = tasks.filter(task => task.status === 'finished').length

  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <Main
          tasks={tasks}
          setTasks={setTasks}
        />
        <Footer
          activeTasks={activeTasks}
          finishedTasks={finishedTasks}
        />
      </BrowserRouter>

    </div>
  );
}

export default App;
