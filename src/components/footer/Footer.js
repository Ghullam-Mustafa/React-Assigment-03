import React from 'react'
import FooterCard from './FooterCard'
import img1 from '../../assets/facebook.jpeg'
import img2 from '../../assets/twitter.jpeg'
import img3 from '../../assets/linkdin.jpeg'
import img4 from '../../assets/instagram.jpeg'

export default function Footer() {
    return (
        <div><div className="container-fluid">
            <div className="row d-flex">
            <div className="col-lg-3 col-md-3 col-sm-12 p-5">
                <FooterCard title="Fruits" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 p-5">
                <FooterCard title="Services" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 p-5">
                <FooterCard title="List" />
            </div>
                
                <div className="col-lg-3 col-md-3 col-sm-12 p-5">
                    <h3>Follow Us</h3>
                    <br />
                    <img src={img1} className="img-fluid m-1" />
                    <img src={img2} className="img-fluid m-1" />
                    <img src={img3} className="img-fluid m-1"/>
                    <img src={img4} className="img-fluid m-1"  />
                    <h3>Subscribe Now</h3>
                    <input type="text" className="form-control" />
                    <div className="pt-3">
                        <button className="btn btn-lg button-nav px-5 text-white">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>

            <div className="container-fluid">
                <div className="row text-center bg-body-tertiary">
                    <h6>Copyright &copy; 2023 All Rights Reserved By Ghullam Mustafa</h6>
                </div>
            </div>
        </div>
    )
}
