import React from 'react'
import "./you.scss"

const You = ({title,datas}) => {
  return (
    <div id="you">
        <h1>{title}</h1>
      <div className="marker">
        {datas.map((data,index) => (
            <img src={data} alt="" key={index}/>
        ))}
      </div>
    </div>
  )
}

export default You
