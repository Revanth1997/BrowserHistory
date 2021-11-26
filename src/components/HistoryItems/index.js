import './index.css'

const HistoryItems = props => {
  const {historyItems, deleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItems
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <div className="history-container">
      <div className="history-details-container">
        <p className="time-accessed">{timeAccessed}</p>
        <div className="history-details">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="text-details">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
            <button
              type="button"
              className="delete-button"
              onClick={onDelete}
              testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryItems
