import React from 'react'
import profile from './img/profile.png'

export default function Navbar(){
    return(
        <section className='profile'>
            <img id='profile__img' src={profile} alt="profile picture"/>
            <h1 id='twitter'>ErnestOwhiroro</h1>
            
            {/* <h1 id='slack'>NeonSage</h1> */}
        </section>
    )
}