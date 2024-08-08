import React, { UseRef, useState, useEffect, Component } from "react";
import { Link } from 'react-router-dom'
import { animate, easeIn, stagger, motion } from "framer-motion"
import { render } from "react-dom";


function escuroClaro() {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    if (document.querySelector("html").classList.toString().includes('black')) {
        return (
            <motion.input className="blackAndWhite" type="checkbox" defaultChecked onClick={() => {
                document.querySelector("html").classList.toggle('black')
            }} layout transition={spring} />
        )
    } else {
        return (
            <motion.input className="blackAndWhite" type="checkbox" onClick={() => {
                document.querySelector("html").classList.toggle('black')
            }} layout transition={spring} />
        )
    }
}

function togleInglish()
{
    document.querySelector("#btnportandenglish").classList.toggle("english")
    document.querySelector("body").classList.toggle("english2")
    
}
function PortIngles() {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    console.log(document.querySelector("body").classList.toString().includes("english2"))
    if (document.querySelector("body").classList.toString().includes("english2")) {
        return (
            <motion.input className="PortAndEnglish english" id="btnportandenglish" type="checkbox" defaultChecked  onClick={() => {
                togleInglish()
            }} layout transition={spring} />
        )
    } else{
        return (
            <motion.input className="PortAndEnglish" id="btnportandenglish" type="checkbox"  onClick={() => {
                togleInglish()
            }} layout transition={spring} />
        )
    }

}




function base() {

    if(document.querySelector("body").classList.toString().includes("english2"))
    {
        return <header>
        <div>
            <h3>João Victor França</h3>

        </div>
        <div>



            {escuroClaro()}
            {PortIngles()}
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/sobre'><h3>About</h3></Link>
            <Link to='/conhecimentos'><h3>knowledge</h3></Link>
            <Link to='/projetos'><h3>Projects</h3></Link>
            <Link to='/contato'><h3>Contact</h3></Link>
        </div>
    </header>
    } else{
        return <header>
        <div>
            <h3>João Victor França</h3>

        </div>
        <div>



            {escuroClaro()}
            {PortIngles()}
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/sobre'><h3>Sobre</h3></Link>
            <Link to='/conhecimentos'><h3>Conhecimentos</h3></Link>
            <Link to='/projetos'><h3>Projetos</h3></Link>
            <Link to='/contato'><h3>Contato</h3></Link>
        </div>
    </header>
    }



}

export default base