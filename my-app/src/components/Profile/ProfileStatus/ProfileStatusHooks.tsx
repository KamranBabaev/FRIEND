import React, {ChangeEvent, useEffect, useState, KeyboardEvent} from "react";


type ProfileStatusPropsType = {
  status: string
  userUpdateStatus: (status: string) => void
  getUserStatus: (userId: string) => void
}

export function ProfileStatusHooks(props: ProfileStatusPropsType) {

  const [editMode, setEditMode] = useState<boolean>(false)
  const [status, setStatus] = useState<string>(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])


  const activatedEditMode = () => {
    setEditMode(true)
  }
  const deActivatedEditMode = () => {
    setEditMode(false)
    props.userUpdateStatus(status)
  }
  const valueTarget = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value
    setStatus(text)
  }


  return (
      <div>
        {
          editMode
              ? <div>
                <input type='text'
                       onChange={valueTarget}
                       onBlur={deActivatedEditMode}
                       value={status}
                       autoFocus
                />
              </div>
              : <div>
                <span onDoubleClick={activatedEditMode}>
                  {props.status || 'статус не заполнен...'}
                </span>
              </div>
        }
      </div>
  )
}
