import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
  const { nameFirst, nameLast, email } = props.userData

  return (
    <div className="user__container">
      <div class="user__name">
        <span className="user__name-first">{nameFirst}</span>{' '}
        <span className="user__name-last">{nameLast}</span>
      </div>
      <div class="user__email">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  )
}

User.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default User
