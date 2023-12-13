import "./App.css";
import Home from "./home.jsx";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      {data.map((event) => {
        return (
          <div>
            <h1>{event.title}</h1>
            {event.tags &&
              event.tags.map((tag) => <p key={tag.id}>{tag.tag}</p>)}
          </div>
        );
      })}
      <Home></Home>
    </div>
  );
}

export default App;
