import React from 'react'
import img from '../../assets/dish.jpeg'


export default function SectionOne(props) {
    return (
        <div class="bg-body-tertiary ">
    <div class="container pt-5">
      <div class="row pb-5">
        <div class="pt-4 col-lg-6 col-md-12 col-sm-12 ">
          <h1 class="fw-bold text-main pt-4">Welcome to <br/> our Fruits Shop</h1>

          <p class="pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi earum et architecto
            laudantium sit est nemo qui voluptatem temporibus! At impedit error nemo iste sint eaque ducimus hic natus
            sit unde</p>
          <br/>
          <button class="btn button-nav  btn-lg m-1 ">Shop Now</button>
          <button class="btn btn-dark btn-lg rounded-0 m-1">Contect us</button>
        </div>
        <div class="pt-4 col-lg-6 col-md-12 col-sm-12 d-flex alig-items-center justify-content-end">
          <img src={img} alt="" class="img-fluid w-75 mt-lg-5 mt-sm-5"/>
        </div>
      </div>
    </div>
  </div>

    )
}
