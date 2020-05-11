import React,{useEffect, useMemo} from 'react';
import TerminusClient from '@terminusdb/terminusdb-client';
import {FormatColumns} from './utils';
import {TableComponent} from './TableComponent';

export const WOQLTable = ({bindings, view, query, serverside})=>{

	//const columns = useMemo(() => makeColumns(), [bindings])
    const [data , columns]  = useMemo(() => makeData(), [bindings])


    /*function makeColumns(){
        view = view || {}
        let wt = TerminusClient.View.table();
        if(view.rules)  wt.loadJSON(view.table, view.rules)

        let wr = new TerminusClient.WOQLResult({bindings: bindings})
    
        let woqt = new TerminusClient.WOQLTable(false, wt)
        woqt.setResult(wr, query)
        let colids = woqt.getColumnsToRender()

        const columns= FormatColumns(colids)//wr.getVariableList())

        let cols = []
        for(var i = 0; i<colids.length; i++){
            let cnt = woqt.getColumnHeaderContents(colids[i]).innerHTML
            cols.push({
                id: colids[i],
                accessor: colids[i],
                Header: colids[i],
                selector: colids[i],
                canSort: true
            })            
        }
        //return columns
    }*/

    function makeData(){
        view = view || {}
       // let wt = TerminusClient.View.table()
        //if(view.rules)  wt.loadJSON(view.table, view.rules)
        let wr = new TerminusClient.WOQLResult({bindings: bindings},query)
    
        //let woqt = new TerminusClient.WOQLTable(false, wt)
        //woqt.setResult(wr, query)

        //let colids = woqt.getColumnsToRender()
        const vlist=wr.getVariableList();
        const listOfColumns= FormatColumns(wr.getVariableList())
        //const listOfColumns= FormatColumns(colids)

        const columns =[{ Header:'Table View', columns:listOfColumns}]

        let data=bindings
        /*let data = [];
        let row = false
        while(row = woqt.next()){
            let nrow = {}
            for(var k in row){
                nrow[k] = (typeof row[k]["@value"] != "undefined") ? row[k]["@value"] : row[k]  
            }
            data.push(nrow)
        }*/
        return [data, columns];
    }

    return(
    	<TableComponent data={data} columns={columns} />
    )

}