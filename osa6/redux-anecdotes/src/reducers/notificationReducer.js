
export const newMessage = (noti) => {
    return {
        type: 'NEW_MESSAGE',
        data: {
            notification: noti
        }
    }
}

const notiReducer = (state = [], action) => {
    console.log(action)
    switch (action.type) {
      case 'NEW_MESSAGE':
          const newMessage = [action.data.notification]
          
          return newMessage
        default:
          return state
    }
  }

  export default notiReducer
  