import React , {useEffect,useState} from 'react';
import TerminusClient from '@terminusdb/terminusdb-client'
import { WOQLTable } from '@terminusdb/terminusdb-react-table';
//import { FormatColumns } from '@terminusdb/terminusdb-react-table';
import { Container } from "reactstrap";

//import {WOQLResult} from "@terminusdb/terminusdb-client";

const App = (props) =>{

    const [reload, setReload] = useState(false)
    const [dataProvider, setDataprovider] = useState([])
    const [listOfColumns, setListOfColumns] = useState([])

    const [bindings, setBindings] = useState([])

    const server=process.env.API_URL;
    const key=process.env.API_KEY
    const db=process.env.API_DB

    const config = {server : server,
                  key : key,
                  db : db}

    const WOQL = TerminusClient.WOQL;
    let query = WOQL.star();

    useEffect(() => {

      const dbClient = new TerminusClient.WOQLClient();
      dbClient.connect(config).then(function(response){
          dbClient.connectionConfig.setDB(db);
          query.execute(dbClient).then((response)=>{
              let wr = new TerminusClient.WOQLResult(response,query);
              const data = wr.getBindings();
              setBindings(data);
              //setListOfColumns(FormatColumns(wr.getVariableList()));
              //setDataprovider(data)
         }).catch((err)=>{
            console.log(err)
         })

     }).catch((err)=>{
         console.log(err)
     })
   },[])

   const columns =[{ Header:'Table View', columns:listOfColumns}]

	return (<Container>
                   <br/>
				   Displaying results from a query using react-table
                   <br/> <br/>
			       {<WOQLTable bindings={bindings} query={query}/>}
                  { /*<TableComponent/>*/}
			</Container>)
}

export default App;
