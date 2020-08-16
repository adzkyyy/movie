import React, {useEffect, useState} from 'react';
import './App.css';
import Card from './Card';
import Header from "./Header";

function App() {
  const[movie, setMovie]= useState([])
  const[page, setPage]= useState(1)

useEffect(()=>{
  const API = '5ee915d46365786e2d67172e2ed7d9b7&'

  setTimeout(async()=>{
    const res = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${page}');
    console.log(res);
    setMovie(res);
  })
},[])  

  return (
    <div className="container">
      <Header text = "PORNHUB"/>
      <div className='list-wrapper'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
