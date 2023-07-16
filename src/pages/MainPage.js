import '../CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import SectionOne from '../components/sectionOne/SectionOne';
import SectionTwo from '../components/sectionTwo/SectionTwo';
import SectionThree from '../components/sectionThree/SectionThree';
import SectionFour from '../components/sectionFour/SectionFour';


export default function MainPage(props) {
  return (
    <>
    <Navbar />
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    </>
    
  )
}
