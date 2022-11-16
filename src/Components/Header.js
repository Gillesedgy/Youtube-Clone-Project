import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import "./Header.css";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import { searchFetch } from "../fetch.js";

export default function Header({ setResult }) {
const [search, setSearch ] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.value !== "") {
   
      fetchData(search)
      setSearch("")
    }
  }
        let video_http = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&regionCode=US&key=${process.env.REACT_APP_API_KEY2}`
        //
    function fetchData(search){
           fetch(video_http 
       )
       .then(res => res.json())
       .then((data)=> 
      //  console.log(data, "^^^", data.items[0].snippet.title) 
       data.items.map((resu)=>{
      
        console.log(resu, resu.snippet.title)
        
       })
       )
       .catch((err)=>{console.log(err)})
    }
   





  // trying to store search in window.storage
  // useEffect is used to handle async functions 
//   useEffect(()=>{
//     // To stop useEffec from infinite loop, set a conditional like MINA did 
// if (search.length === 0) return;
//     // fetch
//     searchFetch(input).then((data.items[0])=>{
//       // I want to set local storage using my search input and saving the data
//       //* this might  be search instead of input, double check with mina  */
//       window.localStorage.setItem(input, JSON.stringify(data))
//       // I want to set mt state with the data
//       setInput(data)
//       // I want to reset my input to prevent an infinite loop 
//       setInput("")

//     })
//   },[input])
  
  
  return (
    <div className="header">
      <div className="header__leftside">
        <div className="menuIcon">
          <MenuIcon />
        </div>
        <Link to="/">
          <img
            className="header__logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="logo"
          />
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="header__searchBar">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button type="submit"> 
            <SearchSharpIcon />
          </button>
        </div>
       </form> 

      <div className="header__rightside">
        <Link to="/about">
          <InfoSharpIcon /> About
        </Link>
      </div>
    </div>
  );
}
