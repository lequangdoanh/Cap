import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";

import "./style.css";

export default function MyRoom() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFRomLocal = localStorage.getItem("room-user");
    setData(JSON.parse(dataFRomLocal));
  }, []);

  console.log("data", data);

  const handleDeleteRoom = (id) => {
    const dataUpdate = data?.filter((item) => item?._id !== id);
    setData(dataUpdate);
    localStorage.setItem("room-user", JSON.stringify(dataUpdate));
  };

  return (
    <>
      <Navbar />
      <div className="wrap-layout">
        {data?.map((item) => (
          <React.Fragment key={item?._id}>
            <div>
              <p>Name: {item?.title}</p>
              <p>Price: {item?.price}</p>
              <p>Max people: {item?.maxPeople}</p>
            </div>
            <button onClick={() => handleDeleteRoom(item?._id)}>
              Cancel room
            </button>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
