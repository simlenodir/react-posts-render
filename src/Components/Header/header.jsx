import "./header.css";
export const Header = () => {
  return (
    <header className="header m-4 p-2">
      <div className="container d-flex justify-content-between">
        <a href="./" className="header_link">
          <h2>Posts</h2>
        </a>
        <input type="search" className="form-control w-50 " />
      </div>
    </header>
  );
};
