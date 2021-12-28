import './intro.scss'
import {useEffect, useRef } from 'react'
// import { Card, CardBody} from 'reactstrap';

import { init } from 'ityped'

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:["Web Designer", "Web Developer", "Content Creater"],
        });
    },[])
    return (
        
        <div className='intro' id = "intro">

            <div className="left">
                <div className="imgContainer">

                    <img src="assets/raypeng.png" alt="" />


                </div>


            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'am</h2>
                    <h1>Ray Peng</h1>
                    <h3>Freelance <span ref ={textRef}></span></h3>
                </div>



                <a href="#intro">
                    <img src="assets/rocket.png" alt="" />
                </a>

            </div>

        </div>
    )
}
