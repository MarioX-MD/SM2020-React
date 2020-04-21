import React from 'react'                                       //L08

class UserLink extends React.Component {
  render() {
    const { user } = this.props
    return (
      <div>
        Welcome back {user.name}
      </div>
    )
  }
}

UserLink.propTypes = {
  user: (props, propName, componentName) => {
    if (!props[propName] || !props[propName].name) {
      return new Error(
        "Nieprawidłowy " + propName + ": Nie zdefiniowano właściwości nazwy dla komponentu " + componentName
      )
    }
  }
}

export default UserLink;