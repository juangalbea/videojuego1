// import React, { Component } from 'react'


// import React, { Component } from 'react'
// import TaskList from './TaskList';
// import "./TaskCollection.css";
// import TaskElement from "./TaskElement"
// import axios from 'axios';



// export default class Comment extends Component {
//   constructor() {
//     super();

//     this.state = {
//         newTaskString: "",
//         tasks: []
//     }
// }

// componentDidMount() {
//     axios
//         .get("http://localhost:5001/tasks")
//         .then(allTasks => {
//             allTasks = allTasks.data.map(task => {
//                 return new TaskElement(
//                     task._id, task.description, task.timestamp, task.favourited, task.done
//                 )
//             })

//             this.setState({
//                 ...this.state,
//                 tasks: allTasks
//             })
//         })
// }

// toggle(taskID, property) {
//     let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

//     chosenTask[property] = !chosenTask[property]

//     axios
//         .put(`http://localhost:5001/task/${taskID}`, {
//             done: chosenTask.done,
//             favourited: chosenTask.favourited
//         })
//         .then(updatedTaskInfo => {
//             console.log(updatedTaskInfo);

//             this.setState({
//                 ...this.state
//             })
//         })
// }

// updateNewTaskString(e) {
//     this.setState({
//         ...this.state,
//         newTaskString: e.target.value
//     })
// }

// addNewTask(e) {
//     if (e.key === 'Enter') {
//         axios.post("http://localhost:5001/task", {
//             "description": this.state.newTaskString
//         })
//             .then(createdTask => {
//                 let tasksClonedArray = [...this.state.tasks]

//                 createdTask = createdTask.data

//                 tasksClonedArray.unshift(
//                     new TaskElement(createdTask._id, createdTask.description, createdTask.timestamp, createdTask.favourited, createdTask.done)
//                 )

//                 this.setState({
//                     ...this.state,
//                     tasks: tasksClonedArray,
//                     newTaskString: ""
//                 })
//             })

//     }
// }
//   render() {
//     return (
//       <div>
//         <section className="task-collection">
//                 <input type="text"
//                     placeholder="Add a new task"
//                     className="add-new-task"
//                     value={this.state.newTaskString}
//                     onChange={(e) => this.updateNewTaskString(e)}
//                     onKeyDown={(e) => this.addNewTask(e)} />
//                 <TaskList tasks={this.state.tasks}
//                     toggleDone={(task) => this.toggle(task, "done")}
//                     toggleFavourite={(task) => this.toggle(task, "favourited")}
//                 >
//                 </TaskList>
//             </section>
//       </div>
//     )
//   }
// }
