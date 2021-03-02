import React, {useState} from "react";
import "./SearchForm.css";

 function SearchForm (props) {
     const [employees, setEmployees] = useState({
     orignalArr: props.employee
     })

     const handleChange = (e) => {
         setEmployees({
             firstName: e.target.value
         })
         console.log(employees.firstName);
         employees.originalArr.filter(employee => employee.firstName.toLowerCase().indexOf(e.target.value) !== -1 );
         this.setState({employees});
        } 

    return (
        <form className ="search">
            <div className="form-group">
                <label htmlFor="employee">Employee Name:</label>
                <input
                value={employees.firstName}
                onChange={(e)=> handleChange(e)}
                name="employee"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Type in an employee name to begin"
                id="id"
               
                />
                <datalist id="employees">
                    {props.employees.map(id => (
                        <option value={id} key={id} />
                    ))}
                    {/* filterEmployees={this.filterEmployees}
     id={employees.id}
     key={employees.id}
     firstName={employees.firstName}
     lastName={employees.lastName}
     email={employees.email}
     image={employees.image} */}
                </datalist>
                
            </div>
        </form>
    );
}

export default SearchForm;
