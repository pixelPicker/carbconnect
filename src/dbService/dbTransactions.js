// import getDB from "./db";

// const deleteAllUsers = async () => {
//   try {
//     const db = await getDB(); // Assuming getDB() returns the IndexedDB connection
//     const transaction = db.transaction("user", "readwrite");
//     const objectStore = transaction.objectStore("user");

//     const request = objectStore.clear();

//     return new Promise((resolve, reject) => {
//       request.onsuccess = () => {
//         console.log("All users have been deleted");
//         resolve();
//       };

//       request.onerror = (event) => {
//         console.error("Error deleting users:", event.target.error?.message);
//         reject(event.target.error?.message);
//       };
//     });
//   } catch (error) {
//     console.error("Error in deleteAllUsers:", error.message);
//     throw new Error(error.message);
//   }
// };
// export default deleteAllUsers;
