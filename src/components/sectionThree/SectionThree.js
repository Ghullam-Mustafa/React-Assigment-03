import React from 'react'
import Card from './Card'
import img1 from '../../assets/black fruit.jpeg'
import img2 from '../../assets/grapes.jpeg'
import img3 from '../../assets/gauva.jpeg'

export default function SectionThree() {
    return (
        <div class="container">
            <div class="row pt-5">
               <Card src={img1}  title="Orange"/>
               <Card src={img2}  title="Grapes"/>
               <Card src={img3}  title="Gauva"/>
            </div>
        </div>
    )
}
