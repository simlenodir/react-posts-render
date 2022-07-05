// import stop from "./img/error-icon-25253";
import "./error.css";
export const Error = ({ status = 404, message = "Something went wrong" }) => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="status">staue: {status}</h1>
      <h1 className="message">Text: {message}</h1>
      {/* <img src={stop} alt="error" /> */}
    </div>
  );
};
