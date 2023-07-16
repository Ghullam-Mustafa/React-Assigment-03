import '../CSS/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import SectionOne from '../components/sectionOne/SectionOne';
import SectionTwo from '../components/sectionTwo/SectionTwo';


export default function MainPage(props) {
  return (
    <>
    <Navbar />
    <SectionOne />
    <SectionTwo />
    </>
    
  )
}
