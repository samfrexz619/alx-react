const notificationDatas = require('../../../../notifications.json');
// import * as notificationDatas from '../../../../notifications.json'



 export const getAllNotificationsByUser = (userId) => {
  // const parsedNotifications = JSON.parse(notificationDatas);
  return notificationDatas.filter(notif => notif.author.id === userId).map(notif => notif.context)
};