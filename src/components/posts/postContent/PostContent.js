import React from 'react' ;

const PostContent = (props) => {
  return (props.contentTrigger) ? (
    <div>PostContent
       <button onClick = {() => props.setContentTrigger(false)}> Close  </button>
        {props.childern}
        <div>
        <div>images carousel</div>
        <div>title </div>
        <div> time published </div>
        <div> description </div>
        <div> location </div>
        <div> category </div>
        <div> need </div>
        <div> amount </div></div>
    </div>
  ) : "" ;
}

export default PostContent