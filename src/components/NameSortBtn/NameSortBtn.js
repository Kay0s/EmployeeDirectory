import React from "react";


 function NameSortBtn(props) { 
    
      sortByName = () => {
        let sortedEmployee = this.state.employees.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
        //target the name to sort
        this.setState({ sortedEmployee });
      };

    return (
        <th>
            <button type="button" onClick={props.sortByName}>Name Sort</button>
        </th>
               
          
    );
}

export default NameSortBtn;
