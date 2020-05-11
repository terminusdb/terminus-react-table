import React,{useEffect, useMemo} from 'react';
import { useTable, usePagination,  useSortBy } from 'react-table'
import { Table,Container,Row, Col, Pagination, PaginationItem, PaginationLink} from "reactstrap";
import TerminusClient from '@terminusdb/terminusdb-client';

export const WOQLTable = ({bindings, view, query, serverside})=>{

    serverside = serverside || false
    const columns = useMemo(() => makeColumns(), [])
    const data = useMemo(() => makeData(), [])

    function makeColumns(){
        view = view || {}
        let wt = TerminusClient.View.table()
        if(view.rules)  wt.loadJSON(view.table, view.rules)
        let wr = new TerminusClient.WOQLResult({bindings: bindings})
    
        let woqt = new TerminusClient.WOQLTable(false, wt)
        woqt.setResult(wr, query)
        let colids = woqt.getColumnsToRender()
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
        return cols
    }

    function makeData(){
        view = view || {}
        let wt = TerminusClient.View.table()
        if(view.rules)  wt.loadJSON(view.table, view.rules)
        let wr = new TerminusClient.WOQLResult({bindings: bindings})
    
        let woqt = new TerminusClient.WOQLTable(false, wt)
        woqt.setResult(wr, query)
        let dat = [];
        let row = false
        while(row = woqt.next()){
            let nrow = {}
            for(var k in row){
                nrow[k] = (typeof row[k]["@value"] != "undefined") ? row[k]["@value"] : row[k]  
            }
            dat.push(nrow)
        }
        return dat
    }


    if(data && columns){
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            prepareRow,
            page, // Instead of using 'rows', we'll use page,
            // which has only the rows for the active page

            // The rest of these things are super handy, too ;)
            canPreviousPage,
            canNextPage,
            pageOptions,
            pageCount,
            gotoPage,
            nextPage,
            previousPage,
            setPageSize,
            state: { pageIndex, pageSize },
            } = useTable(
            {
                columns,
                data,
                initialState: { pageIndex: 0 },
                manualPagination: serverside, // Tell the usePagination
                // hook that we'll handle our own data fetching
                // This means we'll also have to provide our own
                // pageCount.
                //pageCount: controlledPageCount,
            },
            useSortBy, 
            usePagination,
        )    
      
        return (
            <span>
            <Table {...getTableProps()} hover>
                     <thead>
                        {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} >
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? ' 🔽'
                                        : ' 🔼'
                                    : ''}
                            </span>
                        </th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <Row md={12}>
            <Col md={6} >
                <Pagination className="pagination">
                    <PaginationItem>
                        <PaginationLink previous href="#" onClick={() => previousPage()} disabled={!canPreviousPage}/>
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink next href="#" onClick={() => nextPage()} disabled={!canNextPage}/>
                    </PaginationItem>
                </Pagination>
          </Col>
          <Col md={6} className="justify-content-end">
            <span>
            Page{' '}
            <strong>
                {pageIndex  + 1} of {pageCount}
            </strong>{' '}
            </span>
            <select value={pageSize}
                onChange={e => {
                setPageSize(Number(e.target.value))
            }}>
            {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </Col>
      </Row>
    </span>)

    }    
}

