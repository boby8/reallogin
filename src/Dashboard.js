import React, { useEffect, useState } from 'react'

export default function Dashboard() {
    const [data,setData] =useState({});

    function getData(){
        console.log("data");

        let url = "https://secure-refuge-14993.herokuapp.com/list_users";

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
   
   useEffect(()=>{
    console.log("data");

    let url = "https://secure-refuge-14993.herokuapp.com/list_users";

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      console.log(data);
    });
   },[])
  return (
    <div>hello</div>
  )
}
