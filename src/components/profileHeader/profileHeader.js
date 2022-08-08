import React from 'react';

import HeaderContainer, {ProfilImageContainer, ProfilImage,Title} from './profileHeaderStyle';
import Pdp from './monkey.png';


const ProfileHeader = () => {
  return(
  <>
  <HeaderContainer>
    <ProfilImageContainer> <ProfilImage src={Pdp} alt="profil" /></ProfilImageContainer>
    <Title> Nadhir MAZARI BOUFARES</Title>
  </HeaderContainer>
   </>
  );
}


export default ProfileHeader;