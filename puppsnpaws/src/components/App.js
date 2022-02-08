import React, { useState, useEffect } from 'react';
import DogList from './DogList'
import DogDetail from './DogDetail';
import Header from './Header'
import Footer from './Footer'
import NewDogForm from './NewDogForm';
import '../App.css';
import { Route, Routes } from 'react-router-dom';
import ZipCode from './ZipCode';


function App() {

const [dogs, setDogs]=useState([])

//function to fetch dogs and store in state
async function fetchDogs(){
  try{
       const response = await fetch('http://localhost:3000/dogs', {
         method: 'GET'
       });
       const responseJSON = await response.json()
       //updates state with dog list
       setDogs(responseJSON)
  } catch(err) {
    console.log(err)
  }
}

//upon initial render, run the fetchDogs() function
useEffect(() => {
  fetchDogs()
}, [])



  //Each Route has a path (url) and element (componenet to render)
  return (
    <div className="App">
      <Header dogs={dogs} />

      <Routes>
        <Route path="/" element={<DogList dogs={dogs} />} />
        <Route path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:id" element={<DogDetail />} />
        <Route path="/new" element={<NewDogForm />} />
        <Route path="/zipCode/:zipCode" element={<ZipCode />} />
      </Routes>

      <p>Hello World!</p>

      <Footer test={"test"} />
    </div>
  );
}

export default App;
