import React, {useState} from "react";
import "./SearchForm.css";

 function SearchForm (props) { 
     const [inputVal, setInputVal] = useState();
  
    

     const handleChange = (e) => {  
         setInputVal(
            e.target.value
         )
         console.log(inputVal);
         let lowerVal = e.target.value.toLowerCase();
         let newArr = props.employees.filter(employee => employee.firstName.toLowerCase().indexOf(lowerVal) !== -1 );
         console.log(props.employees);
         console.log(newArr);
        props.setFilter(newArr);
        console.log(props.setFilter(newArr));
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
               
            </div> 
        </form>
    );
}

export default SearchForm;
