import React, { useState } from "react";
import RacingBarChart from "./RacingBar/RacingBarChart";
import useInterval from "./RacingBar/useInterval";
import "./App.css";

const getRandomIndex = (array) => {
  return Math.floor(array.length * Math.random());
};

const App = () => {
  const [start, setStart] = useState(false);
  const [data, setData] = useState([
    {
      CountryName: "China",
      Population: 30,
      color: "#f4efd3",
    },
    {
      CountryName: "India",
      Population: 30,
      color: "#cccccc",
    },
    {
      CountryName: "USA",
      Population: 30,
      color: "#c2b0c9",
    },
    {
      CountryName: "Russia",
      Population: 30,
      color: "#9656a1",
    },
    {
      CountryName: "Japan",
      Population: 30,
      color: "#fa697c",
    },
    {
      CountryName: "Thailand",
      Population: 30,
      color: "#fcc169",
    },
  ]);

  useInterval(() => {
    if (start) {
      const randomIndex = getRandomIndex(data);
      setData(
        data.map((entry, index) =>
          index === randomIndex
            ? {
                ...entry,
                Population: entry.Population + 10,
              }
            : entry
        )
      );
    }
  }, 500);

  return (
    <div>
      <h1 className="font-bold text-[2rem]">
        Population growth per country,1950 to 2021
      </h1>
      <p>Click on the legend below to filter by continent 👇</p>
      <RacingBarChart data={data} />
      <button
        className="text-white w-[10rem] m-4 rounded-xl bg-slate-600 hover:bg-slate-400"
        onClick={() => setStart(!start)}
      >
        {start ? "Stop the race" : "Start the race!"}
      </button>
    </div>
  );
};

export default App;
