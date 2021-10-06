import React, { useState,useEffect } from 'react'
import {AgGridReact,AgGridColumn} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const InitialRowData=[
            {make:'Honda', model:'Civic', price:'150000'},
            {make:'Tofaş', model:'Şahin', price:'5000'},
            {make:'Porsche', model:'Cayman', price:'550000'}
]

 const DataWithHooks = () => {
     const[rowData,setrowData]=useState();//InitialRowData

     const [colDefs,setColdefs]=useState([
         {field:'make'},
         {field:'model'},
         {field:'price',editable:'true'}
        ]
     );

     useEffect(()=>{
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(res=>res.json())
        .then(rowData=>setrowData(rowData))
        .catch(err=>console.log(err))

     },[]) //useeffect artık sadece başlangıçta çalışacak//içine state eklersek o değiştiğinde tekrar çalışacak

   return(
       <div className="ag-theme-balham" style={{height:400,width:600}}>

        <AgGridReact
       // defaultColDef={{sortable:true,filter:true}}//default şekilde hepsine verebiliriz
       pagination={true} //:)
        rowData={rowData}
        sortable={true}
        columnDefs={colDefs}
        
        >    
        </AgGridReact>

       </div>
   )
    }


export default DataWithHooks
