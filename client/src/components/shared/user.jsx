import React from 'react'
import {Avatar,ListItemText} from '@mui/material';
import Ryan from '../../assets/Ryan.jpeg'
import {Link} from 'react-router-dom'
import socket from '../../util/Socket';

function User({name="Sharad Chauhan", userId ,lastMsg="Jan 9, 2014",live=false ,letsChat,friendSocketId}) {
  return (
    <>
    <Link to={`/chats/${userId}`} >
    <div className={`flex h-16 border-b-2  items-center px-3 ${friendSocketId==live.socketID?"bg-[#ececec]":""} cursor-pointer transition ease-in-out `} onClick={()=>{letsChat(live)}} >
        <Avatar alt="Remy Sharp" src={Ryan} sx={{ width: 50, height: 50 }} />
        <div className='px-3'>
         <ListItemText primary={name+((live.socketID)==socket.id?" (You)":"")} secondary={lastMsg} />
        </div>
        {live.status?<div className='bg-green-500 w-3 h-3 rounded-full'></div>:<div className='bg-red-500 w-3 h-3 rounded-full'></div>}
    </div>
    </Link>
    </>
  )
}

export default User