import React, { Component } from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-enterprise'

export class Data extends Component {
    constructor(props){
        super(props);
        this.state={
          columnDefs:[
            {headerName:'Make',field:'make', sortable:true, filter: true, checkboxSelection:true},
            {headerName:'Model',field:'model', sortable:true, filter: true},
            {headerName:'Price',field:'price', sortable:true, filter: true}
          ],
          // rowData:[
          //   {make:'Honda', model:'Civic', price:'150000'},
          //   {make:'Tofaş', model:'Şahin', price:'5000'},
          //   {make:'Porsche', model:'Cayman', price:'550000'}
          // ]
          rowData:null
   
        };
      }

      componentDidMount(){
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
        .then(res=>res.json())
        .then(rowData=>this.setState({rowData}))
        .catch(err=>console.log(err))
      }

      onButtonClick=()=>{
        const selectedNodes=this.gridApi.getSelectedNodes();
        const selectedData=selectedNodes.map(node=>node.data);
        const selectedDataStringPresentation=selectedData.map(node=>node.make+' '+node.model).join(', ');
        alert(`Selected Nodes: ${selectedDataStringPresentation}`)

      }

    render() {
        return (
           <div
       className="ag-theme-balham"
       style={{
         width:500,
         height:600
       }}
       >
         
         <button onClick={this.onButtonClick}>Get Selected Rows</button>
        <AgGridReact
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}
       // enableSorting //satırlara tek tek eklemek yerine buraya da eklenebilir
       //enableFiter filtreleme özelliği
        rowSelection="multiple"
        onGridReady={params=>this.gridApi=params.api}
        />
      </div>
        )
    }
};

export default Data;
