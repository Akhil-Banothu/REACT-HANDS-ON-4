import React from 'react'
import './common.css'
import { NavLink } from 'react-router-dom';

const StudentCompo = ({value}) => {
  console.log({value});
  return (
    <div className="content">
      <div className="part-1" >
        <h1>Student Details</h1>
        <button className="btn-addStudent">Add new student</button>
      </div>
      <div className="part-2">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {value.map((item, index) => {
              return(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td><NavLink id="link" href="#">Edit</NavLink></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentCompo