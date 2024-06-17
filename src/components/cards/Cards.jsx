import React from 'react'
import style from './cards.module.css';
import { IoEllipsisHorizontal } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Cards = ({post}) => {
  return (
    <div className={`card ${style.card} border-bottom my-3`}>
    {post.image &&  <img src={post.image} className="card-img-top" alt="..."/>}
    <div className="card-body">
        <h5 className={`${style.title} card-title`}>{post.category}</h5>
        <div className={` d-flex align-items-start justify-content-between`}><h5 className={`${style.title} card-title`}>{post.title}</h5> 
        <div className={`dropdown fs-6`}>
        <span className={`${style.threeDot} fs-6`} data-bs-toggle="dropdown" aria-expanded="false">
        <IoEllipsisHorizontal fontSize={"1.8rem"}/>
  </span>
  <ul className="dropdown-menu ">
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
  </ul>
</div></div>
      
     {post.description &&  <p className={`${style.cardtext} card-text fs-6`}>{post.description.split(/\s+/).slice(0, 20).join(' ')}...</p>}

     {post.category==='Job'? <div className={`${style.job} d-flex`}>
        <span className='fs-6 my-0 fw-bold'><IoBagOutline fontWeight={"bold"} /> {post.company}</span> 
        <span className='fs-6 mx-5 my-0 fw-bold'><IoLocationOutline fontWeight={"bold"}/> {post.location}</span>
     </div>
     :null}
      {post.category==='Job'? 
      <div className='d-grid'>
        <button className='btn btn-outline-secondary py-1 my-3 text-success fw-bolder'>Apply On Timesjobs</button>
      </div>
      
     :null}
     <div className={`${style.footer} d-flex justify-content-between align-items-center`}>
        <div className={`${style.profile} d-flex align-items-end`}>
            <img src={`https://avatar.iran.liara.run/public/boy?username=${post.User}`} alt="" />   <h3 className='fs-6 mx-2 fw-bold'>{post.User}</h3>
        </div>
        <div className={`${style.viewsShare} d-flex align-items-center`}>
            <span className='fs-6 fw-semibold mx-3'><MdOutlineRemoveRedEye fontSize={"1.2rem"}/> 1.4k views</span>
            <button className='btn bg-secondary-subtle'><IoShareSocial /></button>
        </div>
     </div>
    </div>
  </div>
  )
}

export default Cards