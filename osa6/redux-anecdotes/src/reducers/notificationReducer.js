const init = {notification: "This is a notification"}

const notiReducer = (state = init, action) => {
    switch (action.type) {
      case 'NEW_NOTI':
          return state.notification
        default:
          return state
    }
  }

  export default notiReducer
  