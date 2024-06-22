import React from "react";
import Header from './header'
import { motion } from "framer-motion"


import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa6";



function base() {
    return (
        <>
            <Header></Header>

            <section>

                
                <motion.h1 initial={{x: -1000}}
                animate={{x: 0}}
                transition={{ ease: "linear",duration: .5 }}>Entre em contato comigo:</motion.h1>
                <motion.div className="icones"
                initial={{x: 1000}}
                animate={{x: 0}}
                transition={{ ease: "linear",duration: .5 }} >
                    <a href="mailto:jvrafael18@gmail.com" target="_blank"> <SiGmail className="icon" /></a>
                    <a href="https://wa.me/31973170242" target="_blank"><FaWhatsapp className="icon" /></a>
                    <a href="https://www.instagram.com/jaofranca_/" target="_blank"><FaInstagram className="icon" /></a>
                    <a href="https://github.com/Franca0118" target="_blank"><FaGithub className="icon" /></a>
                </motion.div>
            </section>




        </>
    )
}

export default base