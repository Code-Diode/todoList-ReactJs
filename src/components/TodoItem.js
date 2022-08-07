import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { blue, red } from '@mui/material/colors';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
  const id = props.id;
  const [isChecked, setChecked] = useState(false);

  const lineThrough = {
    textDecorationLine: "line-through",
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked(true);
    } else setChecked(false);
  };

  return (
    <div className="todo-item">
      <Checkbox 
      onChange={handleChange} 
      className="circle-checkbox"
      icon={<CheckCircleOutlineOutlinedIcon />}
      checkedIcon={<CheckCircleRoundedIcon />}
      sx={{
        color: blue[900],
        '&.Mui-checked':{
          color: blue[900]
        },
        '&:hover':{
          color:red[200]
        }
      }}
      />
      <p style={isChecked ? lineThrough : null}>{props.text}</p>
      <IconButton
        className="delete-icon-button"
        sx={{
          color: blue[900],
        '&:hover':{
          color:red[200]
        }
        }}
        onClick={() => {
          props.onDelete(id);
        }}
      >
      <DeleteIcon/>
      </IconButton>
    </div>
  );
}

export default TodoItem;
