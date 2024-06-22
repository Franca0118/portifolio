import React from "react";
import { Link } from 'react-router-dom'
import Header from './header'
import { motion } from "framer-motion"



function base() {
    return (
        <>
            <Header></Header>
            <main>
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 1.5 }} >
                <h3>Olá, sou</h3>
                <h1>João Victor</h1>
                <h2>Desenvolvedor WEB / MOBILE</h2>
                <Link to='/sobre'><button>SOBRE <ion-icon name="arrow-forward-outline"></ion-icon></button></Link>
            </motion.div>
            <motion.img 
            initial={{y: -700}}
            animate={{y: 0}}
            transition={{ duration: .5 }} src="https://i.ibb.co/LRpwmCy/image.png" alt="" />
            </main>

        </>
    )
}

export default base