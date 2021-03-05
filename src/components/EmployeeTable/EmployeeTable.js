import React, { useEffect, useState } from "react";
import API from "../../utils/API.js";
import SearchForm from "../SearchForm/SearchForm";


function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [empFilter, setEmpFilter] = useState([]);
  
    useEffect(() => {
        loadEmployees();
    }, []);

    function loadEmployees() {
        console.log(API.fetchEmployees())
        API.fetchEmployees()
        .then(data => {
            console.log(data);
            setEmployees(data);
            setEmpFilter(data);
        })
        .catch(err => console.log(err));
    }
    const sortNames = () => {     
        let tempName = [...empFilter]
        tempName.sort((a, b) => (
          a.firstName > b.firstName ? 1 : -1));     
          console.log(tempName);     
          
          setEmpFilter(tempName);   
        };
        const sortIds = () => {  
        let tempId = [...empFilter]   
        tempId.sort((a, b) => (
          a.id > b.id ? 1 : -1));     
          console.log(tempId); 

          setEmpFilter(tempId);   
        };

    return (
        <>
        <div>
                  <SearchForm employees = { employees }
                  setFilter = {setEmpFilter} /> 
                  <button type="button" className="btn btn-primary"onClick={sortNames}>First Name Sort</button>
                  <button type="button" className="btn btn-success"onClick={sortIds}>Id</button>
        </div>
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {empFilter.map(employee => (
                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td><img alt={employee.picture} src={employee.picture}/></td>
                    </tr>
                    ))}
            </tbody>
        </table>
        </>
    );
}

export default EmployeeTable;
