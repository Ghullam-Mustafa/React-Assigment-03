import React from 'react'

export default function Card(props) {
    return (
        <div class="col-lg-4 col-sm-12 pb-5 d-flex justify-content-center card-body text-center">
            <div class="card " style={{ width: '18rem', }}>
                <div class="card-body text-center"></div>
                     <img src={props.src} class="mx-auto d-block " alt="..." />
                    <div class="card-body">
                        <h5 class="card-title " style={{color: 'orange'}}>{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum recusandae, numquam et
                            corporis aut.
                            </p>

                    </div>
                </div>
            </div>
        
    )
}
