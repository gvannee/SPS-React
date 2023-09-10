import { useEffect, useState } from "react";
import AddPost from "../../components/addPost/AddPost";
import Card from "../../components/card/Card";
import Newsfeed from "../Newsfeed/Newsfeed";
import "./home.css";

const Home = () => {
    

    
    return (<div className="container">
        <div className="content">
            <AddPost />
            <Newsfeed />

        </div>
    </div>
    )
}

export default Home;