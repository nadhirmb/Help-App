import React from "react";
import {
  CloseBtn,
  DivInput,
  FormStyling,
  InsideForm,
  Label,
  Input,
} from "./PostFormStyle";

const PostForm = (props) => {
  return props.trigger ? (
    <FormStyling>
      <InsideForm>
        <CloseBtn onClick={() => props.setTrigger(false)}> Close </CloseBtn>
        {props.childern}
        <form>
          <DivInput>
            <Label for="title "> Title </Label>
            <Input type="text" name="title" />
          </DivInput>
          <DivInput>
            <Label for="description "> description </Label>
            <textarea type="text" name="description" rows="4" cols="38" />
          </DivInput>
          <DivInput>
            <Label for="category "> category </Label>
            <select name="category" id="category" style={{width:'300px', padding :'5px'}}>
                <option value="default">nothing selected</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
          </DivInput>
          <DivInput>
            <Label for="need "> need </Label>
            <Input type="text" name="need" />
          </DivInput>
        </form>
      </InsideForm>
    </FormStyling>
  ) : (
    ""
  );
};

export default PostForm;
