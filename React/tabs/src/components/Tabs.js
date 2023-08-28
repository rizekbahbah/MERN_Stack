import React from 'react'

const Tabs = (props) => {
    const divStyle = {flex:1, margin:"2%", padding:"3%", border:"1px solid black", cursor:"pointer", backgroundColor:"white", color:"black"};
  return (
    <div style={{width:"90%", height:"100px", margin:"0 auto", display:"flex"}}>
        {props.array.map((tab, i) => <div key={i} style={ divStyle } onClick={e => {props.assignTab(tab); e.target.style.backgroundColor="black";e.target.style.color="white";}}>{tab.label}</div>)}
    </div>
  )
}

export default Tabs