import { TasksContainer } from "./components/TasksContainer"

export const App = () => {
  return (
    <>
      <div className="container-fluid">
        
        <h1 className="defaultLabel">TODO LIST</h1>
        
        <TasksContainer />
      
      </div>
    </>
  )
}
