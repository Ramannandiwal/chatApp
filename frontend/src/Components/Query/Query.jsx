import React from 'react'
import "../Query/query.css"
function Query({data}) {
  return (
    <div className=' text-black font-bold skelton min-h-7 p-3 rounded-lg m-3'>
      <p className=' '>
        {data}
      </p>
    </div>
  )
}

export default Query
