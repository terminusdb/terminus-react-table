import React , {useEffect,useState} from 'react';
import TerminusClient from '@terminusdb/terminus-client'

import {TableComponent} from '@terminusdb/terminus-react-table';
import {FormatColumns} from '@terminusdb/terminus-react-table';
/*import makeData from './makeData'*/

import {testResult} from './testResult'

import { Container} from "reactstrap";

//import {WOQLResult} from "@terminusdb/terminus-client";


/*
{
  "table": {},//pager ..
  "rules": [
    {
      "pattern": {
        "scope": "column",
        "variables": [
          "v:Element"
        ]
      },
      "rule": {
        "header": "Element Header"
      }
    }
  ]
}*/

const App= (props) =>{
  const [reload,setReload] = useState(false)
  const [dataProvider,setDataprovider] = useState([])
  const [listOfColumns,setListOfColumns] = useState([])

  const server=process.env.API_URL;
  const key=process.env.API_KEY
  const db=process.env.API_DB

  console.log("server",server)

  const WOQL = TerminusClient.WOQL;
  let query=WOQL.and(
            WOQL.quad("v:Element","type","Class","schema"),
            WOQL.opt().quad("v:Element","label","v:Label","schema"),
            WOQL.opt().quad("v:Element","comment","v:Comment","schema"),
            WOQL.opt().quad("v:Element","tcs:tag","v:Abstract","schema")
    );


    let clientResult;
    //let listOfColumns=[]
    useEffect(() => {
      const dbClient = new TerminusClient.WOQLClient();
         dbClient.connect(server, key).then(function(response){
         dbClient.connectionConfig.setDB(db);
         console.log('query', query)
         query.execute(dbClient).then((response)=>{
              clientResult = new TerminusClient.WOQLResult(response,query);
              const data= clientResult.getBindings();

              setListOfColumns(FormatColumns(clientResult.getVariableList()));

              setDataprovider(data)

         }).catch((err)=>{
            console.log(err)
         })

      }).catch((err)=>{
         console.log(err)
      })
   },[])




	const columns =[{ Header:'test', columns:listOfColumns}]

	return (<Container>
				    MY TEST
				    <TableComponent columns={columns} data={dataProvider} />
			    </Container>)
}

export default App;
