import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import Query from '../Query/Query';
import Query1 from '../Query/Query1';
function Main() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [firstQueryMade, setFirstQueryMade] = useState(false); // State to track if the first query has been made
    const [loading, setLoading] = useState(false); // State to track loading state
    const [query, setquery] = useState("")
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchData();
        }
    };

    const fetchData = () => {
        const query = inputValue;
        setquery(query);
        setInputValue("");
        setLoading(true); // Set loading to true when fetching data
        fetch("http://localhost:5005/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query }),
        })
        .then(response => response.text())
        .then(newData => {
            setData(prevData => [...prevData, newData]);
            setFirstQueryMade(true); // Set firstQueryMade to true after the first query
            setLoading(false); // Set loading to false after receiving data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false); // Set loading to false in case of error
        });   
    };

    return (
        <div className='relative bg-[#212121] w-[88%] max-h-screen flex flex-col overflow-hidden justify-center items-center'>
            <h1 className='text-white font-bold text-3xl'>SARNCHAT</h1>
            {
                !firstQueryMade ? ( // Render "Search Your Query" div only if firstQueryMade is false
                    <div className='min-h-[80%] flex justify-center w-full'>
                        <div className='w-[80%] h-24'>
                            <Query data={"Search Your Query "}/>
                            {loading &&  <Query data={"Loading"}/>} 
                        </div>
                    </div>
                ) : (
                    <div className='w-[75%] min-h-[80%] max-h-[80%] overflow-x-hidden overflow-y-auto text-white mt-4'>
                        
                        {data.map((item, index) => (
                            
                            <Query1 key={index} data={item} query={query}/>
                        ))}
                        {loading && <Query data={"Loading"}/>} 
                    </div>
                )
            }
            <div className='flex items-center justify-center mt-4 w-[70%]'>
                <div className="relative w-full flex items-center">
                    <input 
                        onKeyDown={handleKeyDown}
                        type="text" 
                        placeholder='Message SARNCHAT....' 
                        className='border text-[#838283] bg-[#212121] outline-none w-full h-14 rounded-lg rounded-r-none p-4 pl-12 border-r-0' 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className='border border-l-0 p-1 rounded-r-lg h-14 w-[2.5rem] bg-[#212121] flex items-center justify-center'> 
                        <FaArrowUp 
                            className='p-1 rounded-lg rounded-r-lg h-12 w-[2rem] bg-white' 
                            onClick={fetchData}
                        />
                    </div>
                   
                </div>
            </div>
        </div>
    );
}

export default Main;
