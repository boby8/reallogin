import React from 'react'

export default function Details() {

function getData(){
  console.log("data");
}
  return (
    <>
      <p>hello</p>
      <button onclick={()=>getData()}>c</button>
    </>
  )
}
