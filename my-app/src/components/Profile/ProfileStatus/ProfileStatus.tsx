import React, {FormEvent} from "react";

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
  onStatusChange = (e: FormEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>,
                     prevState: Readonly<{}>) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
        <div>
          {
            this.state.editMode
                ? <div>
                    <input
                      onChange={this.onStatusChange}
                      value={this.state.status}
                      onBlur={this.deactivateEditMode}
                      type='text'
                      autoFocus
                    />
                  </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>
                      {this.state.status || 'статус не заполнен...'}
                    </span>
                  </div>
          }
        </div>
    )
  }
}