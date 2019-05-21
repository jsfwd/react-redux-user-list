import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../../actions/'
import UsersAdd from '../UsersAdd/'
import UsersList from '../UsersList/'
import Header from '../Header/'
import './app.scss'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="app-container">
          <h1>Users</h1>
          <UsersAdd />
          <UsersList />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users }
}

const mapDispatchToProps = {
  deleteUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
