import React,{ useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Header from './header'
import { DiGithubBadge } from "react-icons/di";
import { Link } from 'react-router-dom'


function Projetos() {

    const [ Meurepositorio, setMeurepositorio ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/Franca0118/repos')
            const data = await response.json()
            setMeurepositorio(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <>
        <Header></Header>
        <motion.h1 
        initial={{x : -1000}}
        animate={{x : -450 }}
        transition={{ duration: .2 }} id='projetosTitulo'>Meus Projetos</motion.h1>
        <div id='meuscards'>
            {
               Meurepositorio.length > 0 ?
               Meurepositorio.map((projeto, i)=> {
                if (i % 2 == 0)
                {
                        return (
                            <motion.div className='card'
                            initial={{x : -2000}}
                            animate={{x : 0 }}
                            transition={{ duration: .5 }}>
                               <a href={"https://github.com/"+projeto.full_name}> 
                               <span>
                               <img src={projeto.owner.avatar_url}/>
                               
                               </span>
                               <h2>{projeto.name}</h2>
                                 </a>
                            </motion.div>
                        ) 
                } else{
                    return (
                        <motion.div className='card'
                        initial={{x : 2000}}
                        animate={{x : 0 }}
                        transition={{ duration: .5 }}>
                           <a href={"https://github.com/"+projeto.full_name}> 
                           <span>
                           <img src={projeto.owner.avatar_url}/>
                           
                           </span>
                           <h2>{projeto.name}</h2>
                             </a>
                        </motion.div>
                    ) 
                }
               }) :
               <h1>Carregando...</h1>
            }
            <Link to='/contato'><motion.button
            initial={{x : -1000}}
            animate={{x : 0 }}
            transition={{ duration: .2 }}>ENTRE EM CONTATO<ion-icon name="arrow-forward-outline"></ion-icon></motion.button></Link>
        </div>
        </>
    )
}

export default Projetos
