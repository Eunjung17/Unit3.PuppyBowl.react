// 3. Connect the store and dispatch handlers to React components

import { useState, useEffect } from 'react'
import './App.css'

import { Provider } from "react-redux";
import store from "./app/store";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import AllPlayers from "./components/allPayers/AllPlayers";
import NewPlayerForm from "./components/newPlayerForm/NewPlayerForm";
import SinglePlayer from "./components/singlePlayer/SinglePlayer";
import Lost from "./components/Lost";


function App() {

  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [selectedPlayerName, setSelectedPlayerName] = useState('');
 



  return (
    <>
      <Provider store={store}>
        <Router>
          <Nav  selectedPlayerId={selectedPlayerId} setSelectedPlayerName={setSelectedPlayerName} selectedPlayerName={selectedPlayerName}/>
          <Routes>
            <Route path="/" element={
                                    <>
                                    <section>
                                      <AllPlayers setSelectedPlayerId={setSelectedPlayerId} setSelectedPlayerName={setSelectedPlayerName} selectedPlayerName={selectedPlayerName}/>
                                      <SinglePlayer selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId} setSelectedPlayerName={setSelectedPlayerName}/>
                                    </section>
                                    </>              
            }/>
            <Route path="/newForm" element={<NewPlayerForm/>}/> 
            <Route path="*" element={<Lost/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
