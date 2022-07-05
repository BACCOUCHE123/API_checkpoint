import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';


function UserList() {
const[listOfUSer,setlistOfUSer]=useState([]);
useEffect(() => {axios.get('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    setlistOfUSer(response.data)
  
  console.log(response);
})
.catch(function (error) {
  
  console.log(error);
})},[])  ;


  return (
    <div>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
         <th>email</th>
         
        </tr>
      </thead>
      <tbody>
      {listOfUSer.map(user=><tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          
        </tr>
      )}
        </tbody>
    </Table>
    </div>
  )
}

export default UserList
