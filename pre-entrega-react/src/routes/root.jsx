import React from 'react'
import '../style.css'
import '../App.css'
import '../components/NavBar/navBar.css'
import NavBar from '../components/NavBar/navBar'
import { useContext } from 'react'
import { Context } from '../context/context'


function Root() {

  const contextValues = useContext(Context)
  console.log(contextValues)

  return (
    <React.Fragment>
      <NavBar />       
    </React.Fragment>
  )
}



export default Root
