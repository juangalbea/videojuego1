// import React, { Component } from 'react'
// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             arr: new Array(4).fill(0).map((e, i) => i + 1),
//             platforms: new Array(4).fill(0).map(() => (
//                 {
//                     x: "",
//                     y: "",
//                     w: "",
//                     h: "",
//                     color: " "
//                 }
//             ))
//         }
//     }
//     formSubmit = (e) => {
//         e.preventDefault();
//         //Aqui tienes que poner la llamada al service!
//         console.log(this.state.platforms);
//     }
//     changeInput = (e) => {
//         const { id, name, value } = e.currentTarget;
//         let newState = [...this.state.platforms];
//         newState[id][name] = value;
//         this.setState({ ...this.state, newState });
//     }
//     rangeValue = (e) => {
//         this.setState({
//             ...this.state,
//             arr: new Array(+e.currentTarget.value).fill(0).map((e, i) => i + 1),
//             platforms: new Array(+e.currentTarget.value).fill(0).map(() => (
//                 {
//                     x: "",
//                     y: "",
//                     w: "",
//                     h: "",
//                     color: " "
//                 }
//             ))
//         })
//     }
//     render() {
//         console.log(this.state.arr)
//         console.log(this.state.platforms);
//         return (
//             <React.Fragment>
//                 <input type="range" min="4" max="8" defaultValue="4" onChange={this.rangeValue} />
//                 <form onSubmit={this.formSubmit}>
//                     {
//                         this.state.arr.map((e, i) => (
//                             <div key={i}>
//                                 <label htmlFor="x">X:</label>
//                                 <input type="number" name="x" id={i} onChange={this.changeInput} value={this.state.platforms[i].x} />
//                                 <label htmlFor="y">Y:</label>
//                                 <input type="number" name="y" id={i} onChange={this.changeInput} value={this.state.platforms[i].y} />
//                                 <label htmlFor="w">W:</label>
//                                 <input type="number" name="w" id={i} onChange={this.changeInput} value={this.state.platforms[i].w} />
//                                 <label htmlFor="h">W:</label>
//                                 <input type="number" name="h" id={i} onChange={this.changeInput} value={this.state.platforms[i].h} />
//                                 <label htmlFor="color">Color:</label>
//                                 <input type="text" name="color" id={i} onChange={this.changeInput} value={this.state.platforms[i].color} />
//                             </div>
//                         ))
//                     }
//                     <input type="submit" />
//                 </form>
//             </React.Fragment>
//         )
//     }
// }