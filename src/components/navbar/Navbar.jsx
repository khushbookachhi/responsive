import React from 'react'
import style from './navbar.module.css'
import { RiArrowDownSFill } from "react-icons/ri";
import data from '../../data/posts.json'

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook  } from "react-icons/fa";
import modalpng from './image/modalpng.png';
const Navbar = () => {
  return (
    <>
    <nav classNameclassName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameclassName="container-fluid  position-relative">
  <a classNameclassName="navbar-brand fw-bolder text-primary fs-4" href="/">Responsive Layout</a>
  <button classNameclassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classNameclassName="navbar-toggler-icon"></span>
    </button>
    <div classNameclassName={`${style.createUser} collapse navbar-collapse position-absolute end-0`} id="navbarSupportedContent">
      <ul classNameclassName="navbar-nav">
        <li className={`${style.modalbtn} nav-item fs-5 fw-bold`} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
            Create User <span className='text-primary'>It's free !</span><RiArrowDownSFill />
        </li>
      </ul>

    </div>
  </div>
</nav>
     <div className={`${style.navbar} position-relative`}>
        <button className={`${style.joingroup} btn btn-outline-light position-absolute end-0 mx-4 my-2`}>Join Group</button>
    <div className={`${style.heading} text-white position-absolute`}>
        <h2 className='mb-0'>Computer Engineering</h2>
        <span className='text-light fs-6'>142,765 Computer Engineers follow this</span>
    </div>
    </div>
    {/* navbar  */}
    <div className='container-xl'>
    <nav className="navbar navbar-expand-lg bg-body-white border-bottom border-1">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">All Posts({data.length})</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className='fs-6 fw-bold'>Filter all <RiArrowDownSFill /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Article</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Event</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Job</a>
        </li>
       
      </ul>
    </div>
    <div className={`${style.showNavRight}`}>
    <button className='btn bg-secondary-subtle mx-2'>Write a Post <RiArrowDownSFill /></button>
        <button className='btn btn-primary'>Join Group</button>
    </div>
  </div>
</nav>
    </div>
    {/* modal  */}
  
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  {/* modal  */}
  
  <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-lg modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header bg-success-subtle">
        <h1 className={`${style.modalTitle} modal-title fs-6 text-success`} id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className={`${style.modalBody} modal-body d-flex justify-content-between`}>
        {/* creat account  */}
       <div className={`${style.modalbodyleft}`}>
        <h3 className='fw-bolder'>Create Account</h3>
        <form className='mt-4'>
        <div class="input-group">
  <input type="text" className="form-control bg-body-secondary border border-secondary-subtle p-2 border-bottom-0 rounded-0" placeholder="FirstName"/>
  
  <input type="text" className="form-control bg-body-secondary  border border-secondary-subtle p-2 border-bottom-0 rounded-0" placeholder="LastName"/>
</div>
<div className="input-group">
  <input type="text" className="form-control bg-body-secondary border border-secondary-subtle p-2 border-bottom-0 rounded-0" placeholder="Email"/>
</div>
<div className="input-group position-relative">
  <input type="text" className="form-control bg-body-secondary border border-secondary-subtle p-2 border-bottom-0 rounded-0" placeholder="Password"/>
  <MdOutlineRemoveRedEye fontSize={"1.5rem"} className={`${style.eye} position-absolute text-secondary`}/>
</div>
<div class="input-group">
  <input type="text" className="form-control bg-body-secondary border border-secondary-subtle p-2 rounded-0" placeholder="Confirm Password"/>
</div>

<button className={`${style.createbtn} btn btn-primary rounded-5 mt-3`}>Create Account</button>
        </form>
   <button className={`${style.createbtn} btn border my-3 fw-semibold`}><FaFacebook color='blue' /> Sign Up with facebook</button>
   <button className={`${style.createbtn} btn border  fw-semibold`}><FcGoogle /> Sign Up with google</button>
       </div>
       {/* image and sign in  */}
       <div className={`${style.modalbodyright} d-flex flex-column align-items-center`}>
        <p className='fw-semibold'>Already have an account ? <span data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className={`${style.modalbtn} text-primary`}>Sign In</span></p>
        <img src={modalpng} alt="" className='bg-primary'/>
        <small className='mt-2'>By signing up, you agree to our Terms & conditions, Privacy policy</small>
       </div>
      </div>
      <div className="modal-footer">
        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button> */}
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-lg modal-xl modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header bg-success-subtle">
      <h1 className={`${style.modalTitle} modal-title fs-6 text-success bg-success-subtle`} id="exampleModalToggleLabel">Let's learn, share & inspire each other with our passion for computer engineering. Sign In now 🤘🏼</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className={`${style.modalBody} modal-body d-flex justify-content-between`}>
        {/* creat account  */}
       <div className={`${style.modalbodyleft} bg-light`}>
        <h3 className='fw-bolder'>Sign In</h3>
        <form className='mt-4'>
<div className="input-group">
  <input type="text" className="form-control bg-body-secondary border border-secondary-subtle p-3 border-bottom-0 rounded-0" placeholder="Email"/>
</div>
<div className="input-group position-relative">
  <input type="text" className="form-control bg-body-secondary border border-secondary-subtle p-3 border-bottom-0 rounded-0" placeholder="Password"/>
  <MdOutlineRemoveRedEye fontSize={"1.5rem"} className={`${style.eye} position-absolute text-secondary`}/>
</div>


<button className={`${style.createbtn} btn btn-primary rounded-5 mt-3`}>Sign In</button>
        </form>
   <button className={`${style.createbtn} btn border my-3 fw-semibold`}><FaFacebook color='blue' /> Sign Up with facebook</button>
   <button className={`${style.createbtn} btn border  fw-semibold`}><FcGoogle /> Sign Up with google</button>
       </div>
       {/* image and sign in  */}
       <div className={`${style.modalbodyright} d-flex flex-column align-items-center`}>
        <p className='fw-semibold'>Don’t have an account yet? <span data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className={`${style.modalbtn} text-primary`}>Create new for free!</span></p>
        <img src={modalpng} alt="" className='bg-primary'/>
        <small className='mt-2'>By signing in, you agree to our Terms & conditions, Privacy policy</small>
       </div>
      </div>
      <div className="modal-footer">    
        {/* <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button> */}
      </div>
    </div>
  </div>
</div>
    </>
   
  )
}

export default Navbar