import React, { Component } from "react";
import List from "./List";
import newId from './utils/newId';

class ToDoList extends Component {
  constructor() {
    super();
    this.inputTask = React.createRef();
    this.state = {
      taskList: [],
    };
  }

  getActiveTaskCount = () => {
    let c = this.state.taskList.filter(task => task.status === 'active').length;
    return c;
  }

  getTotalTodos = () => {
    return this.state.taskList.length;
  }

  updateTask = (e) => {
    if (e.key === 'Enter') {
      const obj = {id: newId(), name: this.inputTask.current.value, status: 'active', checked: false};
      this.inputTask.current.value = '';
      this.setState({
        taskList: [...this.state.taskList, obj],
      });
    }
  };

  taskChecked = (task) => {
    let taskList = [...this.state.taskList];
    let currentTask = taskList.find(item => item.id === task.id);
    currentTask.checked = !currentTask.checked;
    currentTask.status = currentTask.checked ? 'completed' : 'active';
    this.setState({taskList}, () => {
      console.log(this.state.taskList);
    });
  }

  deleteTask = (index) => {
    let taskList = [...this.state.taskList];
    taskList.splice(index, 1);
    console.log(taskList);
    this.setState({taskList}, () => {
      console.log(this.state.taskList);
    });
  }

  render() {
    const { taskList } = this.state;
    return (
      <div>
        <h2>To Do List</h2>
        <label>Add your task here &nbsp;</label>
        <input
          type="text"
          ref={this.inputTask}
          onKeyPress={this.updateTask}
          placeholder="Add new task..."
        ></input>
    
        <ul>
        {taskList.map((task, index) => (
          <List key={task.id} task={task} index={index} taskChecked={this.taskChecked} deleteTask={this.deleteTask}/>
        ))}
        </ul>

        <h6>todos left: {this.getActiveTaskCount()}</h6>
        <h6>Total Todos: {this.getTotalTodos()}</h6>

      </div>
    );
  }
}

export default ToDoList;
