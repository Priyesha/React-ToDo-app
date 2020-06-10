import React from "react";
import "./App.css";

function List(props) {
  
  const handleChange = () => {
    props.taskChecked(props.index, props.task);
  }

  const handleDelete = () => {
    props.deleteTask(props.task.id);
  }  
  
  const {task} = props
  return (
      <li style={{
        textDecoration: (task.status === 'completed') ? 'line-through' : 'none'
      }}>
      <input type="checkbox" onChange={handleChange} defaultChecked={task.checked}>
        </input>
        &nbsp;{task.name}&nbsp;
        <sup><i onClick={handleDelete} className="fa fa-times icon"></i></sup>
      </li>
  );
}

export default List;
