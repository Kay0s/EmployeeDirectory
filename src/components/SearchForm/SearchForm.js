import React, {useState} from "react";
import "./SearchForm.css";

 function SearchForm (props) { 
     const [inputVal, setInputVal] = useState();
     const [empFilter, setEmpFilter] = useState(props.employees);
    

     const handleChange = (e) => {  
         setInputVal(
            e.target.value
         )
         console.log(inputVal);
         let lowerVal = e.target.value.toLowerCase();
         let newArr = props.employees.filter(employee => employee.firstName.toLowerCase().indexOf(lowerVal) !== -1 );
         console.log(props.employees);
         console.log(newArr);
         setEmpFilter(newArr);
         console.log(newArr);
        } 

    return (
        <form className ="search">
            <div className="form-group">
                <label htmlFor="employee">Employee Name:</label>
                <input
                onChange={(e)=> handleChange(e)}
                name="employee"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Type in an employee name to begin"
                id="id"
               
                />
                <datalist id="employees">
                    {empFilter.map(id => (
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
