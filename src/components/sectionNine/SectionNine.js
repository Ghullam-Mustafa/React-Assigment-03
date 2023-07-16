import React from 'react'
import img from '../../assets/lemon.jpeg'

export default function SectionNine() {
  return (
    <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 p-5">
        <h1>Contact us</h1>
        <br/>
        <h5 class="border-bottom border-2 p-1 border-dark">Name</h5>
        <h5 class="border-bottom border-2 p-1 ">Phone Number</h5>
        <h5 class="border-bottom border-2 p-1 ">Email</h5>
        <br/>
        <h5 class="border-bottom border-2 p-1 ">Message</h5>
        <div class="pt-5">
          <button class="btn btn-lg button-nav  px-5 text-white">Send</button>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 text-end">
        <img class="lemon img-fluid " src={img} alt=""/>
      </div>
    </div>
  </div>
  )
}
