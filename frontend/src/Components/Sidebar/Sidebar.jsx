import React, { useEffect, useState } from 'react';
import "./query.css";

function Sidebar() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/query")
      .then(response => response.json())
      .then(data => {
        setHistory(data.reverse());
      })
      .catch(error => {
        console.error("Error fetching history:", error);
      });
  }, []);

  return (
    <div className='p-3 flex flex-col items-center w-[18%] h-screen bg-[#171717]'>
      {/* Render your sidebar content using the 'history' state */
           history.map((item, index) => (
             <div className='skelton w-[90%] m-1 p-1 border rounded-lg ' key={index}>{item.query}</div>
           ))
      }
    </div>
  );
}

export default Sidebar;
