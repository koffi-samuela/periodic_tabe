import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom"
import dataset from '../../components/data/data.json'
import './Details.scss'
import { useEffect } from 'react'
import getBgColor from '../../components/functions'
import getFrenchName from '../../components/functinName'
import getbonding from '../../components/getBonding'
export default function Details() {
  //recuperartion de atomicnumbec use params
  const {atomicnumber} = useParams();
  console.log(atomicnumber);

  //creation de state pour stocker la data 
  const [data, setData] = useState();




  //utilisation de useEffect et array.find pour afficher la data correspondantes
  //à l'atomic number récupéré des paramètres
  useEffect(() =>{
    if(!dataset){return;}
    const data_find = dataset.results.find((e) => e.atomicnumber === parseInt(atomicnumber))
    setData(data_find);
    },[atomicnumber])
    console.log(data);
  return (
    <section id='Details_page ' className='container text-center'>
      <Link to={`/`}>retour</Link>
          <div className="detail">
            <div className={"title text-center w-25 mx-auto my-3 "+getBgColor(data?.groupblock)}>
                <h1> {data?.name} | {data?.symbol} </h1>
            </div>
            <div className="info d-flex justify-content-between my-4">
                <p>Numéro atomique : <b className={getBgColor(data?.groupblock)}>{data?.atomicnumber}</b></p>
                <p> Famille : <b className={getBgColor(data?.groupblock)}>{getFrenchName(data?.groupblock)}</b> </p>
            </div>
            <div className="properties text-center d-flex justify-content-between my-4 ">
                <div className="properties__physic">
                      <h3 className={getBgColor(data?.groupblock)}>Propriétés physiques</h3>
                      <p>Masse atomique :  {data?.atomicmass} </p>
                      <p> Configuartion éléctronique : {data?.electronicconfiguration}</p>
                      <p> Rayon iconique : {data?.ionradius}</p>
                      <p>Point de fusion : {data?.meltingpoint} K (Kelvin) </p>
                      <p>Point d'ébullition: {data?.boilingpoint}  K (Kelvin)</p>
                      <p> Etat standard : {data?.standardstate}</p>
                </div>
                <div className="properties__chemical">
                  <h3 className={getBgColor(data?.groupblock)}> Propriétés chimiques </h3>
                  <p>Electrobégativité :{data?.electronegativity} </p>
                  <p> Energie d'ionisation :  {data?.ionizationenergy}  kJ/mol (kilojoules par mole)</p>
                  <p>Etats d'oxydation : {data?.oxidationstates}</p>
                </div>
            </div>

          </div>
          <div className="other text-center w-25 mx-auto">
          <h3 className={" "+getBgColor(data?.groupblock)} >Autres </h3>
            <p>Année de découverte : {data?.yeardiscovered} </p>
            <p> Liaison type : {getbonding(data?.bondingtype)} </p>
          </div>
    </section>
  )
}

