import React from 'react'
import style from './post.module.css'
import Cards from '../cards/Cards'
import data from '../../data/posts.json';
import { IoLocationOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { MdThumbUp } from "react-icons/md";
import Group from '../groups/Group';

const Posts = () => {
  return (
   <div className={`${style.container} container-xl d-flex justify-content-between px-4`}>
    <div className={`${style.posts} fs-1 bg-white`}>
      { data.map((post,index)=>{
       return <Cards
       post={post}
       key={index}
       />
       })}
    </div>

    <div className={`${style.rightSide} fs-1 px-4 py-2`}>
    <div className="d-flex position-relative shadow-sm " role="search">
    <IoLocationOutline fontWeight={"bold"} fontSize={"1.2rem"} className={`${style.icon}`}/>
        <input className="form-control me-2 px-4" type="search" placeholder="Enter your Location" aria-label="Search"/>
      </div>

    <p className='fs-6 text-secondary my-4'><BsExclamationCircle /> Your location will help us serve better and extend a personalised experience.</p>

    <div className={`${style.group} d-flex flex-column align-items-center`}>

    <h4 className={`${style.recommond} d-flex align-item-center mb-3 fs-6`}><MdThumbUp className='mx-2'/> RECOMMENDED GROUPS</h4>
    <div className='bg-white' style={{"width":"100%"}}>
     <Group name={"Leisure"}/>
     <Group name={"Activism"}/>
     <Group  name={"MBA"}/>
     <Group  name={"Engineering"}/>
     <Group  name={"Philosophy"}/>
    </div>

    </div>
    <button className='btn btn-outline-primary my-5'>see more...</button>
    </div>




   </div>
  )
}

export default Posts