import React, { useEffect, useState } from 'react'
import dataset from '../../components/data/data.json'
import Card from '../../components/Card';
export default function Home() {
//recupération des donnéés (data) dans le data.json avec useEffect()
const [data, setData] = useState([]);
useEffect(()=>{
    // affectation de dataset a data
    setData(dataset.results);
},[])
console.log(data);

  return (
   <section id='Homepage' className='container'>
        <div className="Homepage__title text-center">
            <h2 className='my-3'>Bienvenue sur notre tableau périodique des éléments</h2>
            <p className='my-4'> Vous pouvrez cliquez sur un des éléments pour voirs ses détails</p>
        </div>
        <div className="atomic_grid">
            <div className="row g-3 d-flex justify-content-center">
            {/* on utilise map pour parcourir chaque élément du tableau */}
            {
               data.length > 0 && (
                data.map((data_item)=>(
                
                <div className="col-md-2">
                    <Card item={data_item}/>
                </div>                    
                ))
               ) 

            }
            </div>
        </div>
   </section>
  )
}
