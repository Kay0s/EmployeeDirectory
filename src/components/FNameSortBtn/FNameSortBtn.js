import React, {useState} from "react";

 function FNameSortBtn(props) { 
    const [clickFNameVal, setClickFNameVal] = useState();
    
     const handleOnClick= (e) => {
         setClickFNameVal (
             e.target.value
         )
        console.log(clickFNameVal);
        let sortedEmployee = [...props.employees].sort((a, b) =>
      
          a.firstName > b.firstName ? 1 : -1
        );
        //target the name to sort
        setClickFNameVal({ sortedEmployee });
      };

    return (
        <th>
            <button type="button" className="btn btn-primary"onClick={(e)=> handleOnClick(e)}>First Name Sort</button>
        </th>
               
          
    );
}

export default FNameSortBtn;
