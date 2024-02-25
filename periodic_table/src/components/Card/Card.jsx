import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import getBgColor from '../functions'
import getFrenchName from '../functinName'
export default function Card({item}) {







    //99
    //11
    //9
    // 88
    //9
    // 64
    // 14
    // 18
    //15
    // 114
    // 25
//actinoid = violet (bleu viaolacet) (99)code couleur : 
//alkali metal = bleu clair (11)
//alkaline earth metal =  violet pure(88)
//halogen = violet (9)
//lanthanoids = (64) violet avce nuance de bleu
//metalloid = (14) turquoise
//noble gas (18) : violet
//nonmetal = (15) : bleu-mauve
//post-transition metal = rouge (114) : rose pure
//transition metal : (25) rose normal



  return (
    <Link to={`/Details/${item.atomicnumber}`}>
        <div class={"card "+getBgColor(item.groupblock)}>
        {/* <div class={`card ${getBgColor()}`}> */}
                    <div className="card-body py-1">
                        <div className="card-title d-flex justify-content-between">
                            <h4>{item.symbol}</h4>
                            <p className='fs-5'> {item.atomicnumber}</p>
                        </div>
                        <div className="card-subtitle text-center ">
                            <p>
                                    {item.name}
                            </p>
                        </div>
                    </div>
                </div> 
    </Link>
  )
}
