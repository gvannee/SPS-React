import { useContext } from "react";
import Card from "../../components/card/Card";
import { DataLength } from "../../context/DataLength";

const Newsfeed = () => {
    
    const users = []
    for (let i = 0; i <= localStorage.length - 1; i++) {
        
            users.push(JSON.parse(localStorage.getItem(`user${i}`)))
        
        
    }
    


    return (
        <div className="mid">
                {
                    Array.isArray(users) ? (users.map((user, index) =>{
                        console.log(user);
                        return (
                            <div className="post" key={index} > <Card user={user} /> </div>
                        )
                    })) : null
                }

            </div>
    )
}

export default Newsfeed;