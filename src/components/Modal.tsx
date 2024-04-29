// import React from 'react';
import EntryForm from './EntryForm'

type Props = {
    id?: string[],
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>)
    return (
        <div onClick={ props.onClose } className="fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-gray-600 bg-opacity-50">
            <div onClick={(e) => { e.stopPropagation() }} className="max-w-sm w-2/5 fixed flex z-1 mt-5 bg-white shadow-2xl rounded">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row space-x-24 mb-3 bg-orange-700">
                        <p onClick={props.onClose} className="flex justify-start m-3 py-1 px-2 rounded hover:bg-slate-800 text-white text-lg">X</p>
                        <p className="flex flex-grow mx-8 py-4 text-white text-lg">Car Entry</p>
                    </div>
                    <div className="flex flex-col items-center text-center mt-0 p-1">
                        <EntryForm id={ props.id } onClose={props.onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
