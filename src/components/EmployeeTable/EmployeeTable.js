import React, { useEffect, useState } from "react";
import "./EmployeeTable.css";
import API from "../../utils/API.js";
import SearchForm from "../SearchForm/SearchForm";

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);


    useEffect(() => {
        loadEmployees();
    }, []);

    function loadEmployees() {
        console.log(API.fetchEmployees())
        API.fetchEmployees()
        .then(data => {
            console.log(data);
            setEmployees(data);
        })
        .catch(err => console.log(err));
    }
    return (
        <>
        <div>
                  <SearchForm employees = { employees } /> 
        </div>
        <table>
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
                {employees.map(employee => (
                    <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <img alt={employee.picture} src={employee.picture}/>
                    </tr>
                    ))}
            </tbody>
        </table>
        </>
    );
}

export default EmployeeTable;
