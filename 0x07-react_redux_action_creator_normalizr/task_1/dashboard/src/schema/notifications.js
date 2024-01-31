// const notificationDatas = require('../../../../notifications.json');
import * as notificationDatas from '../../../../notifications.json'
import { normalize, schema } from "normalizr";



const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationData, [notification]);


 export const getAllNotificationsByUser = (userId) => {
  return notificationDatas.filter(notif => notif.author.id === userId).map(notif => notif.context)
};