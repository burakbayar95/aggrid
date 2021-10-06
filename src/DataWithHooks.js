import React, { useState } from 'react'
import {AgGridReact,AgGridColumn} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const InitialRowData=[
            {make:'Honda', model:'Civic', price:'150000'},
            {make:'Tofaş', model:'Şahin', price:'5000'},
            {make:'Porsche', model:'Cayman', price:'550000'}
]

 const DataWithHooks = () => {
     const[rowData,setrowData]=useState(InitialRowData);

   return(
       <div className="ag-theme-balham" style={{height:400,width:600}}>

        <AgGridReact
       // defaultColDef={{sortable:true,filter:true}}//default şekilde hepsine verebiliriz
        rowData={rowData}
        >
            <AgGridColumn field="make"></AgGridColumn>
            <AgGridColumn field="model"></AgGridColumn>
            <AgGridColumn field="price" sortable={true}></AgGridColumn>
        </AgGridReact>

       </div>
   )
    }


export default DataWithHooks
