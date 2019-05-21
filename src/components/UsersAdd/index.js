import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../actions/'
import './users-add.scss'

const initialState = {
  nameFirst: '',
  nameLast: '',
  email: '',
}

class UsersAdd extends Component {
  // set the initial state of the form
  state = initialState

  // update the state anytime someone changes an input
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.target.value,
    })
  }

  // create the new user
  handleSubmit = event => {
    event.preventDefault()

    // create the new user
    this.props.addUser(this.state)

    // reset the form to the initial state
    this.setState(initialState)
  }

  render() {
    return (
      <section className="users-add">
        <h2>Add User</h2>
        <form className="users-add__form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label for="users-add__input-name-first">
              First name <span class="required">*</span>
            </label>
            <input
              type="text"
              name="nameFirst"
              id="users-add__input-name-first"
              className="input__name-first input-text"
              onChange={this.handleChange}
              value={this.state.nameFirst}
              placeholder="First name"
              required
            />
          </div>
          <div className="field">
            <label for="users-add__input-name-last">
              Last name <span class="required">*</span>
            </label>
            <input
              type="text"
              name="nameLast"
              id="users-add__input-name-last"
              onChange={this.handleChange}
              value={this.state.nameLast}
              placeholder="Last name"
              required
            />
          </div>
          <div className="field">
            <label for="users-add__input-email">
              Email <span class="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="users-add__input-email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="Email"
              required
            />
          </div>
          <button
            type="submit"
            className="users-add__submit user__action user__action-add"
            title="Add new user to list"
          >
            Add User
          </button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch(addUser(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAdd)
