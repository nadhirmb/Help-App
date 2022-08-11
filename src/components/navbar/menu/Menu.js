import React from 'react'
import { Link } from 'react-router-dom'
import { DivStyled } from './MenuStyle'


const Menu = () => {
  return (
    <DivStyled>
      <div style = {{margin :'0px 10px 20px 10px' }}> <Link to="/profil" style ={{ fontWeight :'bold ' , textDecoration : "none" }}> Profile </Link>   </div>
      <div style = {{margin :'0px 10px 20px 10px'}}> <Link to="/signin"  style ={{ fontWeight :'bold ' , textDecoration : "none" }}> Sign Out </Link> </div>
      
    
    </DivStyled>
  )
}

export default Menu