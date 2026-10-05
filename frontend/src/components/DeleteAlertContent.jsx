// import React from 'react'
const DeleteAlertContent = (content, onDelete) => {
  return (
    <div className="">
        <p className="">{content}</p>

        <div className="">
            <button
              type="button"
              className=""
              onClick={onDelete}
            >
                Delete
            </button>
        </div>
    </div>
  )
}

export default DeleteAlertContent