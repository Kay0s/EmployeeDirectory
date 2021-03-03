import React, {useState} from "react";

 function LNameSortBtn(props) { 
    const [clickLNameVal, setClickLNameVal] = useState();
    
     const handleOnClick= (e) => {
         setClickLNameVal (
             e.target.value
         )
        console.log(clickLNameVal);
        let sortedEmployee = [...props.employees].sort((a, b) =>
      
          a.lastName > b.lasstName ? 1 : -1
        );
        //target the name to sort
        setClickLNameVal({ sortedEmployee });
      };

    return (
        <th>
            <button type="button" onClick={(e)=> handleOnClick(e)}>Last Name Sort</button>
        </th>
               
          
    );
}

export default LNameSortBtn;
