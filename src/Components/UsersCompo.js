import React, { useState } from 'react'
import StudentCompo from './StudentCompo'

const UsersCompo = () => { 

   const [users] = useState([
      {
         name: 'John',
         age: 26,
         course: 'MERN',
         batch: 'October',
      },

      {
         name: 'Doe',
         age: 25,
         course: 'MERN',
         batch: 'November',
      },

      {
         name: 'Biden',
         age: 26,
         course: "MERN",
         batch: 'September',
      },
      {
         name: 'Barar',
         age: 22,
         course: 'MERN',
         batch: 'September',
      },
      {
         name: 'Christ',
         age: 23,
         course: 'MERN',
         batch: 'October',
      },
      {
         name: 'Elent',
         age: 24,
         course: 'MERN',
         batch: 'November',
      },
      {
         name: 'Harshita Sharma',
         age: 24,
         course: 'MERN',
         batch: 'October',
      }
   ])


  return (
    <div>
      <StudentCompo value={users} />
    </div>
  )
}

export default UsersCompo