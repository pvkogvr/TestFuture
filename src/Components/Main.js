import React, { useState } from "react";
import Card from "./Card"
import axios from "axios";
const Main = () =>{
    const [search, setSearch]=useState("");
    const [bookData, setData]=useState([]);
    const searchBook =(evt)=>{
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDbsOvonIsvZxPkygHo_yPWUAfYBklk5Ss' + '&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>Тут много текста и это первая строка</h1>
            </div>
            <div className="row2">
                <h2>Тут меньше текста и это 2-я строка</h2>
                <div className="search">
                    <input type="text" placeholder="Введите название книги"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                    <button><i class="fas fa-search"></i></button>
                </div>
                <img src="./images/bg2.png" alt="image2" />
            </div>
        </div>
        
        <div className="container">
            
            {
                <Card book={bookData}/>
            }

        </div>
        </>
    )
}

export default Main;