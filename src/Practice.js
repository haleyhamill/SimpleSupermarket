import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("URL");

const checkForNewNotifications = () => {
  API.get("/notifications/new.json").then((data) => {
    console.log(data);
    showNewNotifications(data.count);
  });
};
