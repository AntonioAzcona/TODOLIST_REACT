

export const CustomCard = ({ task, deleteTask }) => {
  return (
    <>
    <div className="card text-white bg-primary mb-3" style={{ maxHeight: '180rem' }}>
      
      <div className="card-group">

        <div className="card bg-primary border-primary">
          <div className="card-body">
            <h6 className="card-title">{ task }</h6>
          </div>
        </div>

        <div className="card bg-primary border-primary">
          <div className="card-body text-end">
            <button 
              className="btn btn-danger" 
              type="button"
              onClick={ deleteTask }
            >Eliminar
            </button>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}
