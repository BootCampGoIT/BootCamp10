import React from "react";
import { AddItemContainer } from "./AddItemStyled";
import sprite from "../../../icons/reusable/sprite.svg";

const AddItem = ({ openForm }) => {
  return (
    <AddItemContainer onClick={openForm}>
      <div className='addItemWrapper'>
        <svg className='addItemIcon'>
          <use href={sprite + "#icon-plus"} />
        </svg>
      </div>
    </AddItemContainer>
  );
};

export default AddItem;
