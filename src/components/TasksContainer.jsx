import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../store/slices/thunks';
import { CustomCard } from './CustomCard';

export const TasksContainer = () => {
 
    const { taskList = [] } = useSelector( state => state.todo );
    const dispatch = useDispatch();

    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if(newTask.length > 0) {
            const tarea = newTask[0].toUpperCase() + newTask.substring(1);
            const newTaskList = [...taskList, tarea]
            dispatch( getTasks(newTaskList) )
            setNewTask('')
        }
    }

    const handleDeleteTask = (task) => {
        const tempTaskList = taskList;
        const newTaskList = tempTaskList.filter(element => element != task)
        dispatch( getTasks(newTaskList) )
    }

    const handleNewTask = (event) => {
        setNewTask(event.target.value);
    }

    useEffect(() => {
      dispatch( getTasks() )
    }, [])

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-2">Gestiona tus tareas aquí</h5>

                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ej. Preparar café"
                            value={ newTask }
                            onChange={ (event) => handleNewTask(event) }
                        />
                        <button 
                            className="btn btn-primary" 
                            type="button"
                            onClick={ () => handleAddTask() }
                        >Agregar</button>
                    </div>

                    <ul className="list-group list-group-flush">
                        {
                            taskList.map((task) => (
                                <CustomCard 
                                    key={task}
                                    task={task}
                                    deleteTask={() => handleDeleteTask(task) }
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}