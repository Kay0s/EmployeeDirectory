import React, {useState} from "react";

 function NameSortBtn(props) { 
    const [clickVal, setClickVal] = useState();
    
     const handleOnClick= (e) => {
         setClickVal (
             e.target.value
         )
        console.log(clickVal);
        let sortedEmployee = [...props.employees].sort((a, b) =>
      
          a.firstName > b.firstName ? 1 : -1
        );
        //target the name to sort
        setClickVal({ sortedEmployee });
      };

    return (
        <th>
            <button type="button" onClick={(e)=> handleOnClick(e)}>First Name Sort</button>
        </th>
               
          
    );
}

export default NameSortBtn;
