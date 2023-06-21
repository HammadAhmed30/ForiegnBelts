import React from 'react'
import "../../../styles/HomePage.css";
import { Link } from 'react-router-dom';



export default function LikedBar() {
  return (
    <div className='width-100 liked_bar_cnt_main'>
        <div className='res-1440-in liked_bar_cnt'>
            <div className='liked_bar_cnt_dis'></div>
            <p className='liked_bar_cnt_p'>Send inquiry to acquire your desire belts in one go!</p>
            <Link to={"/liked"}><img className='liked_bar_cnt_img' src="/images/filledheart.png" alt="Liked Belts" /></Link>
        </div>
    </div>
  )
}
