import React from 'react'

const Details = (props) => {
  return (
    <div style={{width:"90%", height:"100px",margin:"0 auto"}}>
        <div style={{ margin:"2%", padding:"3%", border:"1px solid black"}}>{props.tab.content}</div>
    </div>
  )
}

export default Details