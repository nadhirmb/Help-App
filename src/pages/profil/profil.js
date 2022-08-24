import React from 'react';
import ProfileHeader from '../../components/profileHeader/profileHeader';
import Navbar from '../../components/navbar/Navbar';
import { DivProfil } from './profileStyle';
import ProfileContent from '../../components/profileContent/ProfileContent';


const Profil = (props) => {
  return (
    <div>
      <Navbar theme={props.theme} setTheme={props.setTheme} />
    <DivProfil>
      <ProfileHeader/>
      <ProfileContent/>
    </DivProfil>
    </div>
  )
}

export default Profil;