// import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import {server_calls } from "../api/server"
import {useDispatch, useStore} from "react-redux"
import { chooseMake, chooseModel, chooseYear, chooseColor, choosePrice } from "../redux/slices/RootSlice"

interface FormProps {
    id?: string[];
    onClose: () => void;
}

const EntryForm = ( props:FormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        // setTimeout(() => {window.location.reload()}, 500);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 200);
            props.onClose()
            event.target.reset()
        } else {
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(chooseColor(data.color));
            dispatch(choosePrice(data.base_price));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 200);
            event.target.reset()

            props.onClose();
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="make" className= "flex flex-start">Make</label>
                <Input {...register('make')} name='make' placeholder="Manufacturer" />
            </div>
            <div>
                <label htmlFor="model" className= "flex flex-start">Model</label>
                <Input {...register('model')} name='model' placeholder="Automobile Model" />
            </div>
            <div>
                <label htmlFor="year" className= "flex flex-start">Manufacturing Year</label>
                <Input {...register('year')} name='year' placeholder="4-Digit Year" />
            </div>
            <div>
                <label htmlFor="color" className= "flex flex-start">Color</label>
                <Input {...register('color')} name='color' placeholder="Color" />
            </div>
            <div>
                <label htmlFor="base_price" className= "flex flex-start">Base Price</label>
                <Input {...register('base_price')} name='base_price' placeholder="Base Price" />
            </div>
            <div className="flex justify-center">
                <button className="flex justify-center mt-1 mb-2 bg-orange-700 p-2 px-6 rounded hover:bg-slate-900 text-white"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default EntryForm
