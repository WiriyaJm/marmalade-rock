import { useState } from 'react';
import { forgotFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields=forgotFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function ForgotPassword(){
    const [forgotState,setForgotState]=useState(fieldsState);

    const handleChange=(e)=>{
        setForgotState({...forgotState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    //Handle Forgotpassword API Integration here
    const authenticateUser = () =>{

    }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={forgotState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                        />
                    
                    )
                }
            </div>

            <FormAction handleSubmit={handleSubmit} text="Send instructions"/>

        </form>
    )
}