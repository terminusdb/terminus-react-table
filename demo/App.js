import React , {useEffect,useState} from 'react';
import {TableComponent} from '@terminusdb/terminus-react-table';
/*import makeData from './makeData'*/

import {testResult} from './testResult'

import { Container} from "reactstrap";

import {WOQLResult} from "@terminusdb/terminus-client";


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
  const [dataProvider,setDataprovider] = useState([])

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
    

    const replaceStr=(label)=>{
        if(typeof label ==="string"){
          return label.replace('v:','');
        }
        return label;
    }

    const formatColumns=(columnVars,conf)=>{    
      const columnList=columnVars || []

      return columnList.map((item,index)=>{
             return {
                        Header: replaceStr(item),
                        id: item,
                        accessor: item,
                        filterable: false,
                        show:true,
                        Cell: function(props){
                            //return sum(1,4);
                            //return sum;
                            let value;
                            if(typeof props.cell.value==='object'){
                              value=props.cell.value['@value']

                            }else {
                              value = (props.cell.value)//.substring(props.value.lastIndexOf('/')+1)).replace("#",":")
                            }
                            return <span>{value}</span>
                        }
                  }

        })
    }

    let clientResult;
    let listOfColumns=[]
    useEffect(() => {
      const dbClient = new TerminusClient.WOQLClient();
         dbClient.connect(server, key).then(function(response){
         dbClient.connectionConfig.setDB(db);
         console.log('query', query)
         query.execute(dbClient).then((response)=>{
              clientResult = new TerminusClient.WOQLResult(response,query);
              const data= React.useMemo(()=>clientResult.getBindings());
              listOfColumns=formatColumns(clientResult.getVariableList())
              setDataprovider(data)

         }).catch((err)=>{
            console.log(err)
         })

      }).catch((err)=>{
         console.log(err)
      })
   },[reload])
    

    

	  const columns = React.useMemo(
    () => [
      {
        Header:'test', columns:listOfColumns
      }
    ],
    []
  )



		

	return (<Container>
				    MY TEST
				    <TableComponent columns={columns} data={dataProvider}/>
			    </Container>)
}

export default App;