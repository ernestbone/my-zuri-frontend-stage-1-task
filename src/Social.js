import React from "react";
import slack from './img/slack.png'
import github from './img/github.png'

export default function Social(){
    return(
        <div>
            <img className="social" id="slack" src={slack} alt="slack icon"/>
            <img className="social" id="github" src={github} alt="github icon"/>
        </div>
    )
}