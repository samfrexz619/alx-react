import { 
  LOGIN_FAILURE, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER 
} from '../actions/uiActionTypes'
import immutable from 'immutable';


const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
}

const { Map } = immutable;

export const uiReducer = (state = initialState, action)=> {
  state = Map(state)
  switch(action.type) {
    case DISPLAY_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', true)
    }  
    case HIDE_NOTIFICATION_DRAWER: {
      return state.set('isNotificationDrawerVisible', false)
    }
    case LOGIN_SUCCESS: {
      return state.set('isUserLoggedIn', true)
    }
    case LOGIN_FAILURE: {
      return state.set('isUserLoggedIn', false)
    }
    case LOGOUT: {
      return state.set('isUserLoggedIn', false)
    }
    default:
      break;
    }
  return state;
}