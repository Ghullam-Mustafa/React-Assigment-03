import React from 'react'

export default function SectionSixCard(props) {
  return (
    <div class="container">
    <div class="row pb-5">
      <div class="col-lg-6 col-md-12 col-sm-12 mt-5 ">
        <h3>Best Fresh {props.title}</h3>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, cupiditate nemo! Voluptatibus, id
          eligendi quia tempore ducimus ipsam amet delectus, quis atque deleniti enim porro omnis corporis sapiente
          perferendis repellendus.</p>
        <br/>
        <button class="btn btn-dark btn-lg rounded-0">Buy Now</button>
      </div>
      <div
        class="col-lg-6 col-md-12 col-sm-12 pt-4 col-lg-6 col-md-12 col-sm-12 d-flex alig-items-center justify-content-end ">
        <img class="img-fluid mt-lg-5 mt-sm-5 w-50" src={props.src} alt=""/>
      </div>
    </div>
  </div>
  )
}
