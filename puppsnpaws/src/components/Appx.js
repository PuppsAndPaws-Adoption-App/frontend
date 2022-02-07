import React, { useState, useEffect } from 'react';
// import SauceList from './SauceList'
// import SauceDetail from './SauceDetail';
// import Header from './Header'
// import Footer from './Footer'
// import NewSauceForm from './NewSauceForm';
import '../App.css';
// import { Route, Routes } from 'react-router-dom';
//import { isValidZip, showAlert } from "./validate";


const petForm = document.querySelector("#pet-form");

petForm.addEventListener("submit", fetchAnimals);

function Appx() {

  const [animals, setAnimals]=useState([])


//function to fetch sauces and store in state
async function fetchAnimals(e){
  e.preventDefault();

  // Get User Input
  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  // Validate Zip
  if (!isValidZip(zip)) {
    showAlert("Please Enter A Valid Zipcode", "danger");
    return;
  }
  




  try{
       const response = await fetch('http://localhost:3000/sauces', {
         method: 'GET'
       });
       const responseJSON = await response.json()
       //updates state with sauce list
       setSauces(responseJSON)
  } catch(err) {
    console.log(err)
  }
}

//upon initial render, run the fetchSauces() function
useEffect(() => {
  fetchSauces()
}, [])


  //Each Route has a path (url) and element (componenet to render)
  return (
    <div className="App">
      <Header sauces={sauces}/>

        <Routes>
          <Route path='/' element={<SauceList sauces={sauces}/>}/>
          <Route path='/sauces' element={<SauceList sauces={sauces}/>}/>
          <Route path='/sauces/:id' element={<SauceDetail/>}/>
          <Route path='/new' element={<NewSauceForm/>}/>
        </Routes>

      <p>Hello World!</p>

        <Footer test={"test"}/>
    </div>
  );
}

export default Appx;
