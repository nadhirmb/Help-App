import React from 'react';
import ProfileHeader from '../components/profileHeader/profileHeader';
import Navbar from '../components/navbar/Navbar';
import { DivProfil } from './profileStyle';
import ProfileContent from '../components/profileContent/ProfileContent';


const profil = () => {
  return (
    <div>
      <Navbar />
    <DivProfil>
      <ProfileHeader/>
      <ProfileContent/>
    </DivProfil>
    </div>
  )
}

export default profil;