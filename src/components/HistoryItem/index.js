import './index.css'

const HistoryItem = props => {
  const {historyItemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItemDetails

  const deleteFunction = () => {
    deleteItem(id)
  }
  return (
    <li className="history-item">
      <div className="content">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain" />
        <div className="title-url">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
      </div>
      <div className="del-button">
        <button
          className="delete"
          onClick={deleteFunction}
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
