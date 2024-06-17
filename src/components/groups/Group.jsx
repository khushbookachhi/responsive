import React from 'react'
import style from './group.module.css'

const Group = ({name}) => {
  return (
    <div className={`${style.group} d-flex justify-content-between p-2 border-bottom`}>
        <div className={`${style.profile} fs-6`}><img src={`https://avatar.iran.liara.run/public/?username=${name}`} className='mx-2' alt="" />{name}</div>
        <button className='btn btn-sm btn-light'>Follow</button>
    </div>
  )
}

export default Group