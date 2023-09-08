import "./card.css";

import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineComment, AiOutlineLike } from 'react-icons/ai'
import { BiSolidShare } from 'react-icons/bi'

import { useState } from "react";

const Card = ({ user }) => {
    const [popUp, setPopUp] = useState(false);
    const [commentOp, setCommentOp] = useState(false);
    // const user = {
    //     desc: "hi my name is",
    //     username: "Giang Van",
    //     postImg: "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    // };
    return (

        <div className="postInfo">
            <div className="title">

                <div className="left">
                    <div className="avatar">

                        <img src="https://i.pinimg.com/564x/57/fb/31/57fb3190d0cc1726d782c4e25e8561e9.jpg" alt='avatar' />

                    </div>
                    <div className="userInfo">
                        <span>Giáng Vân</span>
                        <span className='username'>1 phút</span>
                    </div>
                </div>

                <div className="right">


                    <BsThreeDots onClick={() => setPopUp(!popUp)} />

                    {popUp ? <div className="pop">
                        <button >delete</button>
                    </div>
                        : null}

                </div>
            </div>

            <div className="main">
                <p>{user?.desc}</p> 
                {
                    user?.picUrl ? <img src={user.picUrl} alt="post Image" /> : null
                }
                

                <div className="reaction">
                    <div className="like">
                        <AiOutlineLike className='icon4' />
                    </div>


                    <div className="comment" onClick={() => setCommentOp(!commentOp)} >
                        <AiOutlineComment className='icon2' />
                    </div>

                    <div className="share"  >
                        <BiSolidShare className='icon3' />
                    </div>



                </div>


            </div>
        </div>






    )
}

export default Card;