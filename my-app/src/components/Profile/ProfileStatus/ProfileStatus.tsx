import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
  status: string
  userUpdateStatus: (status: string) => void
  getUserStatus: (userId: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  }
  deactivateEditMode = () => {
    this.setState({editMode: false})
    this.props.userUpdateStatus(this.state.status)
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })

  }

  render() {
    return (
        <div>
          {
            this.state.editMode
                ? <div>
                  <input
                      value={this.props.status}
                      onChange={this.onStatusChange}
                      onBlur={this.deactivateEditMode}
                      autoFocus
                  />
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>
                      {this.props.status}
                    </span>
                </div>
          }
        </div>
    )
  }
}