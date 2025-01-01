import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Month from './month/Month'
import { useAuth } from './context/AuthProvider';
import Home from './home/Home';
import January from './month/January';
import February from './month/February';
import March from './month/March';
import April from './month/April';
import May from './month/May';
import June from './month/June';
import July from './month/July';
import August from './month/August';
import September from './month/September';
import October from './month/October';
import November from './month/November';
import December from './month/December';


function App() {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Month" element={<Month/>}/>
        <Route path="/January" element={<January/>}/>
        <Route path="/February" element={<February/>}/>
        <Route path="/March" element={<March/>}/>
        <Route path="/April" element={<April/>}/>
        <Route path="/May" element={<May/>}/>
        <Route path="/June" element={<June/>}/>
        <Route path="/July" element={<July/>}/>
        <Route path="/August" element={<August/>}/>
        <Route path="/September" element={<September/>}/>
        <Route path="/October" element={<October/>}/>
        <Route path="/November" element={<November/>}/>
        <Route path="/December" element={<December/>}/>
      </Routes>
    </>
  )
}

export default App
