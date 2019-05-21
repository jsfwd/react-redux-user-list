import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import User from './User'
import { deleteUser } from "../../actions/";
import { CSSTransition } from "react-transition-group";
import "./users-list.scss";

export class UsersList extends Component {
  renderUsers = () => {
    const users = this.props.users.map((user, i) => {
      /*const userData = {
        id: user.id,
        nameFirst: user.nameFirst,
        nameLast: user.nameLast,
        email: user.email,
      }

      return <User key={user.id} userData={userData} />
      */

      return (
        <CSSTransition
          in={true} // TODO: CSSTransition 'in' parameter boolean needs to change to 'false' for exit transition
          timeout={400}
          classNames="user-transition"
          appear={true}
          enter={true}
          exit={true}
          unmountOnExit={true}
          onExited={() => this.props.deleteUser(i)}
        >
          <div className="user__container">
            <div class="user__name">
              <span className="user__name-first">{user.nameFirst}</span>{" "}
              <span className="user__name-last">{user.nameLast}</span>
            </div>
            <div className="user__email">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </div>
            <button
              className="user__action user__action-delete"
              title={`Remove ${user.nameFirst} ${user.nameLast}`}
              onClick={() => this.props.deleteUser(i)}
            >
              Remove
            </button>
          </div>
        </CSSTransition>
      );
    });

    return users;
  };

  render() {
    return (
      <section className="users-list section--full-width">
        <h2>List</h2>
        <div className="users-total">
          <span className="users-total__label">Total Users: </span>{" "}
          <span className="users-total__value">{this.props.users.length}</span>
        </div>
        <div className="users__container">{this.renderUsers()}</div>
      </section>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
};

UsersList.defaultProps = {
  users: []
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: index => dispatch(deleteUser(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
