import React from 'react'
import "../Query/query.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import  Query  from './Query';

function Query1({data,query}) {
  const notify = () =>{
     
     navigator.clipboard.writeText(data)
     .then(() =>toast("Text copied to clipboard!"))
     .catch(error => toast(`${error} Occurred`));
  }
  return (
    
    <div className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-black text-green-600  min-h-7 p-3 rounded-lg m-3'>
      <Query data={query}/>
    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={()=>{
      notify()
    }}>Copy the content</button>
     <ToastContainer />
      <p className=' p-3 text-xl '>
        {data}
      </p>
    </div>
  )
}

export default Query1


