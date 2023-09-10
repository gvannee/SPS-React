import { useContext, useEffect, useState } from "react";
import "./addPost.css";


import { createPicture } from "../../helper";
import { Navigate, useNavigate } from "react-router-dom";
import { DataLength } from "../../context/DataLength";
const AddPost = () => {
    const [desc, setDesc] = useState(null);
    const [pic, setPic] = useState(null)
    const [disabled, setDisabled] = useState(false)
    // const {count, handleClick} = useContext(DataLength);

    const [count, setCount] = useState(0);



    const [url, setUrl] = useState(null)
    const navigate = useNavigate();




    const handleDesc = (event) => {
        setDesc(event.target.value)
        console.log(desc);
    }



    const handleFile = async (e) => {
        const data = await createPicture(e.target.files[0])
        await localStorage.setItem('url', data)
        setUrl(localStorage.getItem('url'))


    }


    const handlePost = async () => {
        const user = {
            desc: desc,
            picUrl: localStorage.getItem('url')
        }
        localStorage.setItem(`user${count}`, JSON.stringify(user))
        setUrl("")
        setDesc("")
        setCount(count + 1);
    }

    useEffect(() => {
        localStorage.removeItem("url")
    }, [count])

    return (
        <div className="newPost">
            <div className="user">

                <div className="left">
                    <div className="avatar">

                        <img src="https://i.pinimg.com/564x/57/fb/31/57fb3190d0cc1726d782c4e25e8561e9.jpg" alt='avatar' />

                    </div>
                    <div className="userInfo">
                        <span>Giáng Vân</span>
                        <select>
                            <option value="1">Public</option>
                            <option value="2">Only you</option>
                        </select>

                    </div>

                </div>


            </div>
            <div className="postContent">
                <input type="text" placeholder="Bạn đang nghĩ gì vậy?" onChange={handleDesc} value={desc} />


                <input type="file" className="ipPhoto" onChange={handleFile} />


                {
                    url ? (<img src={localStorage.getItem('url')} className="postPic" />) : null
                }

                {
                    (desc) ? <button onClick={handlePost} onLoad={pic} disabled={disabled} className="btnPost">Post</button> : <button onClick={handlePost} onLoad={pic} disabled={!disabled} >Post</button>
                }


            </div>
        </div>
    )
}

export default AddPost;