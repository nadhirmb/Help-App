import React from 'react'
import { CloseBtn, FormStyling, InsideForm } from './PostFormStyle';


const PostForm = (props) => {
  return (props.trigger) ? (
    <FormStyling>
      <InsideForm>
        <CloseBtn onClick = {() => props.setTrigger(false)}> Close  </CloseBtn>
        {props.childern}
        <form>
          <div> title </div>
          <div> description </div>
          <div> category </div>
          <div> location </div>
          <div> need </div>
          <div> amount </div>
        </form>
      </InsideForm>

    </FormStyling>
  ) : "";
}

export default PostForm