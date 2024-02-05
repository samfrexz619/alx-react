import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notificationsNormalizer } from '../schema/notifications'
import immutable, { setIn } from 'immutable';

const { Map, setIn } = immutable

const initialState = {
  notifications: [],
  filter: 'default'
}

export const notificationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const data = notificationsNormalizer(action.data);
        Object.keys(data.notifications).map((key) => {
            data.notifications[key].isRead = false;
        })
        return state.merge(data)
    }
    case MARK_AS_READ: {
      return setIn(state, ['notifications', String(action.index), isRead], true);
    }
    case SET_TYPE_FILTER: {
      return setIn('filter', action.filter)
    }
  }
}