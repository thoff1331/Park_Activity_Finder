import React, { Component } from 'react';
import './App.css';

const API_URL = 'https://data.townofcary.org/api/v2/catalog/datasets/parks-and-recreation-feature-map/exports/json';
const DISPLAY_FIELDS = [
  'name',
  'baseball',
  'basketball',
  'battingcages',
  'climbingropes',
  'dogpark',
  'fitnesstrail',
  'openspace',
  'picnic',
  'skatepark',
  'soccer',
  'tenniscourt',
];

class App extends Component {
 constructor() {
super() 
this.state = {
  tableData: [],
  selectOption : ''
}
 } 
 componentDidMount() {
  fetch(API_URL).then((res) => res.json())
  .then((items) => {
    this.setState({
      tableData: items
    })
  })
}
tableRows = () => {
 return DISPLAY_FIELDS.map((row,index) => {
  return  (
    <th key={index}>{row}</th>
  )
})
}
tableContent = () => {
  if(this.state.selectOption !== "" && this.state.selectOption !== "name") {
    return this.state.tableData && this.state.tableData.filter(el => el[this.state.selectOption] === "Yes").map((park,index) => {
      return (
        <tr key={index}>
          <td>{park.name}</td>
          <td>{park.baseball}</td>
          <td>{park.basketball}</td>
          <td>{park.battingcatges}</td>
          <td>{park.climbingropes}</td>
          <td>{park.dogpark}</td>
          <td>{park.fitnesstrail}</td>
          <td>{park.openspace}</td>
          <td>{park.picnic}</td>
          <td>{park.skatepark}</td>
          <td>{park.soccer}</td>
          <td>{park.tenniscourt}</td>
        </tr>
      ) 
     })
  } else {
  return this.state.tableData && this.state.tableData.map((park,index) => {
   return (
     <tr key={index}>
       <td>{park.name}</td>
       <td>{park.baseball}</td>
       <td>{park.basketball}</td>
       <td>{park.battingcatges}</td>
       <td>{park.climbingropes}</td>
       <td>{park.dogpark}</td>
       <td>{park.fitnesstrail}</td>
       <td>{park.openspace}</td>
       <td>{park.picnic}</td>
       <td>{park.skatepark}</td>
       <td>{park.soccer}</td>
       <td>{park.tenniscourt}</td>
     </tr>
   ) 
  })
}
}
handleChange = (e) => {
  this.setState({
selectOption: e.target.value
  })
}
  render() {
    console.log(this.state)
    return (
     <div>
       <labe>Basketball</labe>
       <select
       onChange={this.handleChange}
       >
         {DISPLAY_FIELDS.map((field,index) => {
       return <option value={field} >{field}</option>
  
         })
        }
       </select>
<table>
<tbody>
 <tr>{this.tableRows()}</tr> 
</tbody>
{this.tableContent()}
</table>
     </div>
    );
  }
}

export default App;
