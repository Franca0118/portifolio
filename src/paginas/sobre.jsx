import React from "react";
import Header from './header'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"



function base() {
    return (
        <>
            <Header></Header>
            <motion.main
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 1.5 }} >
                
               <nav>
                
               <h3>
               <span><h1>Sobre Mim</h1></span>

               Tenho 17 anos, estou finalizando meu ensino meio conjunto ao cotmeig,
               e estuou em busca da minha primeira experiencia no mercado de trabalho, com o objetivo de
               aprofundar meus conhecimentos e colaborar com a empresa <br /> 
               Tenho 17 anos, estou finalizando meu ensino meio conjunto ao cotmeig,
               e estuou em busca da minha primeira experiencia no mercado de trabalho, com o objetivo de
               aprofundar meus conhecimentos e colaborar com a empresa 
               <br />
               Texto temporario
               



               <Link to='/conhecimentos'> <button>Conhecimentos <ion-icon name="arrow-forward-outline"></ion-icon> </button></Link>
                </h3>
                
                <img src="https://i.ibb.co/bL72Vz4/image.png" alt="" />
                
               </nav>
            </motion.main>


        </>
    )
}

export default base