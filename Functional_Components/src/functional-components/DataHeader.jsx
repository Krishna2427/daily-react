import { useEffect, useState } from "react";
const DataHeader = ({headData})=>{
    const [ headers, setHeaders] = useState([]);
    useEffect(()=>{
        var temp = [];
        for(let data in headData){
            temp.push(data.toUpperCase());
        }
        setHeaders([...headers,...temp]);
    }, []);
    return(
        <>
          {headers.length > 0 ? (
            headers.map((h, index)=> <th key={index}>{h}</th>)
          ): <th>No Head Data</th>}
        </>
    )
}
export default DataHeader;