/** @format */

const apiUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  }
  if (process.env.NODE_ENV === "production") {
    return "bakendUrl";
  }
};
export default apiUrl;
