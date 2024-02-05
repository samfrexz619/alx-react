import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";


const initialState = {
  notifications: [],
  filter: 'default'
}

export const notificationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: state.notifications.map(notif => {
          return {
            ...notif,
            isRead: false
          }
        })
      }
    }
    case MARK_AS_READ: {
      return {
        ...state,
        notifications: state.notifications.map(notif => {
          if(action.index === notif.id) {
            return { ...notif, isRead: true }
          }
          return {...notif}
        })
      }
    }
    case SET_TYPE_FILTER: {
      return {
        ...state,
        filter: action.filter
      }
    }
  }
}