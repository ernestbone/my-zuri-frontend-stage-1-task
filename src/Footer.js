import React from 'react'
import i4G from './img/I4G.png'

export default function Footer(){
    return(
        <footer>
          <div id='left_footer' className='footer_items'>
            Zuri<strong>.</strong>Internship
          </div>
          <div id='center_footer' className='footer_items'>
            HNG Inernship 9 Frontend Task
          </div>
          <div id='right_footer' className='footer_items'>
            <img src={i4G} alt="ingressive for good"/>
          </div>
        </footer>
    )
}