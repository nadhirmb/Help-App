import React, {useState} from 'react'
import {CgProfile} from 'react-icons/cg'
import { Button } from './ProfileStyle';

const Profile = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div style= {{padding : '0px'}}>
      <Button onClick={ () => {setOpen(!open)}}> 
        <CgProfile size ={ 40} />
      </Button>
    {open && props.children }
    </div>
  )

  
}

export default Profile