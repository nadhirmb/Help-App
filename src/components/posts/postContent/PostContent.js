import React from 'react' ;
import { CloseBtn, ContentElement, InsidePostContent, PostContentStyled } from './PostContentStyle';

const PostContent = (props) => {
  return (props.contentTrigger) ? (
    <PostContentStyled>
    <InsidePostContent>
       <CloseBtn onClick = {() => props.setContentTrigger(false)}> X  </CloseBtn>
        {props.childern}
        <div>
        <ContentElement> <img src={props.imgSrc} alt="ok" width = "200px" /></ContentElement>
        <ContentElement style={{fontWeight:'bold'}}> title </ContentElement>
        <ContentElement> time published </ContentElement>
        <ContentElement> description </ContentElement>
        <ContentElement> location </ContentElement>
        <ContentElement> category </ContentElement>
        <ContentElement> need </ContentElement>
        <ContentElement> amount </ContentElement></div>
    </InsidePostContent>
    </PostContentStyled>
  ) : " " ;
}


export default PostContent