import '../CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import SectionOne from '../components/sectionOne/SectionOne';
import SectionTwo from '../components/sectionTwo/SectionTwo';
import SectionThree from '../components/sectionThree/SectionThree';
import SectionFour from '../components/sectionFour/SectionFour';
import SectionFive from '../components/sectionFive/SectionFive';
import SectionSix from '../components/sectionSix/SectionSix';
import SectionSeven from '../components/sectionSeven/SectionSeven';
import SectionEight from '../components/sectionEight/SectionEight';
import SectionNine from '../components/sectionNine/SectionNine';
import Footer from '../components/footer/Footer';


export default function MainPage(props) {
  return (
    <>
    <Navbar />
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <SectionSix/>
    <SectionSeven/>
    <SectionEight/>
    <SectionNine/>
    <Footer/>
    </>
    
  )
}
