import React, { UseRef, useState, useEffect, Component } from "react";
import { Link } from 'react-router-dom'
import { animate, easeIn, stagger , motion } from "framer-motion"


function teste() {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
      };
    if (document.querySelector("html").classList.toString().includes('black')) {
        return (
            <motion.input type="checkbox" defaultChecked onClick={() => {
                document.querySelector("html").classList.toggle('black')
            }} layout transition={spring} />
        )
    } else {
        return (
            <motion.input type="checkbox" onClick={() => {
                document.querySelector("html").classList.toggle('black')
            }} layout transition={spring} />
        )
    }
}





function base() {

    return <header>
        <div>
            <h3>João Victor França</h3>
        </div>
        <div>



            {teste()}
            <Link to='/'><h3>Home</h3></Link>
            <Link to='/sobre'><h3>Sobre</h3></Link>
            <Link to='/conhecimentos'><h3>Conhecimentos</h3></Link>
            <Link to='/projetos'><h3>Projetos</h3></Link>
            <Link to='/contato'><h3>Contato</h3></Link>
        </div>
    </header>



}

export default base