import { useState, useEffect } from "react";
import './newsfeed.css';
import Card from "../../components/card/Card";
import { DataLength } from "../../context/DataLength";

const Newsfeed = () => {
    const userArr = []
    
    for (let i = 0; i <= localStorage.length - 1; i++) {
        const user = JSON.parse(localStorage.getItem(`user${i}`));
        userArr.push(user)
        
    }
    const [users, setUsersArr] = useState(userArr)

    useEffect(() => {
        
    
        }, [userArr])
    
    return (
        <div className="feed">
                {
                    Array.isArray(users) ? (users.map((user, index) =>{
                        console.log(user);
                        return (
                            <div className="post" key={index} > <Card user={user} /> </div>
                        )
                    })) : console.log(null)
                }

            </div>
    )
}

export default Newsfeed;