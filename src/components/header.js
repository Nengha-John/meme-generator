import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import troll from '../images/troll-face.svg'

export default function Header(){
    return (
        <nav className='navbar text-white p-4' style={{'backgroundColor': "#672280",}}>
            <div className='navbar-brand text-white' style={{fontSize: '20.75px',fontWeight:'700'}}>
                <img src={troll} className='img px-4' alt='troll'></img>
                Meme Generator
            </div>
            <div className='p ' style={{fontSize: '12px'}}>
                React Course - Project 3
            </div>
        </nav>
    )
}