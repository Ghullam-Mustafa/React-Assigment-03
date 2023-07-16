import React from 'react'
import SactionSixCard from './SactionSixCard'
import img1 from '../../assets/orange.jpeg'
import img2 from '../../assets/black grapes.jpeg'
import img3 from '../../assets/green fruit.jpeg'

export default function SectionSix() {
  return (
    <div>
       <SactionSixCard title="Orange" src={img1}/>
       <SactionSixCard title="Grapees" src={img2}/>
       <SactionSixCard title="Gauva" src={img3}/>
    </div>
    
  );
}
