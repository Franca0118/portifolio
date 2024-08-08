import React from "react";
import Header from './header'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

import { DiAndroid, DiApple, DiCss3, DiJsBadge, DiNpm, DiGithubBadge } from "react-icons/di";
import { FaReact, FaPython, FaPhp, FaHtml5 } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoHardwareChip } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

function base() {
    return (
        <>
            <Header></Header>

            <section>


                <motion.h1
                initial={{y: -300}}
                animate={{y: 0}}
                transition={{ ease: "linear",duration: .6 }}>Meus conhecimentos:</motion.h1>
                <motion.div className="icones"
                initial={{x: -1000}}
                animate={{x:0}}
                transition={{ duration: .5 }} >
                    <DiAndroid className="icon" />
                    <SiTypescript className="icon" />
                    <GrMysql className="icon" />
                    <DiNpm className="icon" />
                    <DiGithubBadge className="icon" />
                    <FaReact className="icon" />

                </motion.div>

                <motion.div className="icones"
                initial={{x: 1000}}
                animate={{x:0}}
                transition={{ duration: .5 }} >
                    <FaPython className="icon" />
                    <FaPhp className="icon" />
                    <FaHtml5 className="icon" />
                    <DiCss3 className="icon" />
                    <DiJsBadge className="icon" />
                    <IoHardwareChip className="icon" />
                </motion.div>
                <Link to='/projetos'><button>MEUS PROJETOS<ion-icon name="arrow-forward-outline"></ion-icon></button></Link>

            </section>




        </>
    )
}

export default base