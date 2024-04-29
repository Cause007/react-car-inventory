import { useState } from 'react'
import Modal from './Modal'
import { server_calls } from '../api/server'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'


const columns: GridColDef[] = [
    // {field: 'id', headerName: "ID", width: 0},
    {field: 'make', headerName: "Make", headerClassName: 'bg-slate-300 text-lg font-bold', flex: 2},
    {field: 'model', headerName: "Model", headerClassName: 'bg-slate-300 text-lg font-bold', flex: 2},
    {field: 'year', headerName: "Year", headerClassName: 'bg-slate-300 text-lg font-bold', flex: 1},
    {field: 'color', headerName: "Color", headerClassName: 'bg-slate-300 text-lg font-bold', flex: 1},
    {field: 'base_price', headerName: "Base Price", headerClassName: 'bg-slate-300 text-lg font-bold', flex: 1, type: 'number'}
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { tableData, getData } = useGetData();
    const[ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 1000)
    }

  return (
    <>
        <Modal
        id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add Entry
                </button>
            </div>
            <button onClick={handleOpen} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Update</button>
            <button onClick={deleteData} className="p-3 bg-slate-300 rounded m-3 hover:bg-slate-800 hover:text-white" >Delete</button>
        </div>   
        <div className={ open ? "hidden" : "container mx-10 flex flex-col border rounded"}
        style={{ height: 700, width: '100%', maxWidth: 1000, alignContent: 'center'}}
        >
            <h2 className="p-3 bg-orange-700 text-white my-1 rounded">The Inventory</h2>
            <DataGrid rows={tableData} columns={columns} rowsPerPageOptions={[50]}
            checkboxSelection={true}
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable