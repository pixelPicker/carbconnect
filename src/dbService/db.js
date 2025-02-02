let db;
let request = window.indexedDB.open("carbConnectDb", 1);

request.onerror = (event) => {
  console.error("The following error occured: ", event.target.error?.message);
};
request.onupgradeneeded = (event) => {
  console.log("Upgraded the database version");
  const db = event.target.result;

  if(!db.objectStoreNames.contains("user")) {
    db.createObjectStore("user", {keyPath: "email"})
  }
  if(!db.objectStoreNames.contains("logEvent")) {
    const logStore = db.createObjectStore("logEvent", {keyPath: "logId", autoIncrement: true});
    logStore.createIndex("dateIndex", "date", {unique: false})
    logStore.createIndex("categoryIndex", "category", {unique: false})
  }
  if(!db.objectStoreNames.contains("categories")) {
    db.createObjectStore("categories", {keyPath: "categoryId", autoIncrement: true})
  }


};
request.onsuccess = (event) => {
  console.log("Opened database successfully");
  db = event.target.result;
};

const getDB = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
    } else {
      const request = indexedDB.open("carbConnectDb", 1);
      request.onsuccess = (event) => {
        db = event.target.result;
        resolve(db);
      };
      request.onerror = (event) => {
        reject(event.target.error);
      };
    }
  });
};

export default getDB;