import "./App.css";
import Home from "./home.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch("/api/events?page=" + page + "&limit=" + 9)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [page, setPage]);

  return (
    <div className="App">
      {data.map((event) => {
        return (
          <div>
            <h1 key={event.id}>{event.title}</h1>
            {/* {event.tags &&
              event.tags.map((tag) => <p key={tag.id}>{tag.tag}</p>)} */}
          </div>
        );
      })}
      {
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      }

      <Home></Home>
    </div>
  );
}

export default App;
