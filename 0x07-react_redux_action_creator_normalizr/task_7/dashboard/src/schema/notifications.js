// const notificationDatas = require('../../../../notifications.json');
import * as notificationDatas from '../../dist/notifications.json'
import { normalize, schema } from "normalizr";



const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notification", {
  author: user,
  context: message,
});

export const normalized = normalize(notificationDatas, [notification]);


 export const getAllNotificationsByUser = (userId) => {
  const dataOutput = [];
  const notifications = normalized.entities.notification;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      dataOutput.push(messages[notifications[id].context]);
    }
  }

  return dataOutput;
};