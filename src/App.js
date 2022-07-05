import { useEffect, useState } from "react";
import { Error, Header, Loading } from "./Components";
import { Footer } from "./Components/footer/footer";
import "./app.css";

export const App = () => {
  const [posts, setposts] = useState({
    loading: true,
    data: [],
    error: null,
  });
  useEffect(() => {
    (async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/pos");
      if (!res.ok) {
        setposts({
          loading: false,
          data: [],
          error: {
            message: res.statusText ? res.statusText : undefined,
          },
        });
        return;
      }
      const data = await res.json();

      setposts({
        loading: false,
        data: data,
        error: null,
      });
    })();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="loader  ">{posts.loading && <Loading />}</div>
        </div>
        {posts.error && (
          <Error status={posts.error.staus} message={posts.error.message} />
        )}
        {posts.data.length > 0 && (
          <ul>
            {posts.data.map((post) => (
              <div key={post.id} className="card d-flex flex-column">
                <h5 className="card-header">{post.title}</h5>
                <div className="card-body d-flex flex-column">
                  <p className="card-text list-inline-item">{post.body}</p>
                  <a href="./" className="btn btn-primary w-25">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};
