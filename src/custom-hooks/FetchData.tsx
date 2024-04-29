import { useState, useEffect } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ tableData, setData ] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])
/* useEffect calls on a function (handleDataFetch) whenever something in the list changes, 
if blank, this would run every time the page refeshes (all the time); 
the [] means it will only activate once - when the DataTable is first mounted/created
*/

    return { tableData, getData:handleDataFetch }
}
