import React,{useMemo} from 'react';
import TerminusClient from '@terminusdb/terminusdb-client';
import {TableComponent} from './TableComponent';

export const WOQLTable = ({bindings, view, query, serverside})=>{
    const [data , columns]  = useMemo(() => makeData(), [bindings])

    function makeData(){
        view = view || {}
        let wt = TerminusClient.View.table()
        if(view.rules)  wt.loadJSON(view.table, view.rules)
        let wr = new TerminusClient.WOQLResult({bindings: bindings},query)    
        let woqt = new TerminusClient.WOQLTable(false, wt)       
        woqt.setResult(wr, query)
        const columns = formatTableColumns(woqt)
        return [bindings, columns];
    }

    function formatTableColumns(woqt){
        let colids = woqt.getColumnsToRender()
        let listOfColumns = colids.map((item, index) => {
            return {
                Header: item,
                id: item,
                accessor: item,
                selector: item,
                canSort: woqt.isSortableColumn(item),
                filterable: woqt.isFilterableColumn(item),
                Cell: function(props){
                    return renderCellValue(props, woqt)
                }
            }
        })
        let colstruct = {columns:listOfColumns}
        if(woqt.config.header()) colstruct.Header = woqt.config.header()
        else colstruct.Header = " " 
        return [colstruct]
    }

    return(
    	<TableComponent data={data} columns={columns} />
    )
}

//cell values that come back from queries can have 
function renderCellValue(props, woqt){
    let value = props.cell.value || ""
    const strval = getStringFromBindingValue(value)
    if(typeof strval == "undefined") return ""
    return strval
}

function getStringFromBindingValue(item, first){
    if(Array.isArray(item)){
        return valueFromArray(item)
    }
    if(typeof item == "object"){
        if(typeof item['@value'] != "undefined"){
            return (<span title={item['@type']}>{item['@value']}</span>)
        }
        else {
            return JSON.stringify(item, false, 2) 
        }
    }
    if(item == "terminus:unknown") return ""
    return item;
}

function valueFromArray(arr){
    let vals = arr.map((item) => {
        return getStringFromBindingValue(item)
    })
    return vals.join(", ")
}
