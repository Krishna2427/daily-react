import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
const FormCrud = () => {
    const [entries, setEntries] = useState([]);
    const [isEditing, setIsEditing] = useState(null);

    const intialValues = {
        name:'',
        email:'',
        age:''
    }
    
    const formVadiationSchema = Yup.object({
        name:Yup.string().required('User Name Rewuired').min(4, 'chars abouve'),
        email:Yup.string().email('Invalid email format').required('Email is required'),
        age:Yup.string().required('age required').min(1, "age must be at least one"),
    })
    const formik = useFormik({
        initialValues:intialValues,
        formVadiationSchema:formVadiationSchema,

        onSubmit:(value, {resetForm})=>{
           if(isEditing !== null){
               const updatedEntries = [...entries];
               updatedEntries[isEditing] = value;
               setEntries(updatedEntries);
               setEntries(null);
           }else{
            setEntries([...entries, value]);
           }
           resetForm();
        }
    })

    // Delete an entry 

    
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                            className={'form-control' + formik.touched.name && formik.errors.name ? 'error':''} 
                            />
                            {formik.touched.name && formik.errors.name ? <div className='error-message'>{formik.errors.name}</div>: null}
                        </div>
                        <div>
                            <label htmlFor="name">Email:</label>
                            <input type="email" id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                            className={'form-control' + formik.values.email && formik.errors.email ? 'error':''} 
                            />
                            {formik.values.email && formik.errors.email ? <div className='error-message'>{formik.errors.email}</div>:null}
                        </div>
                        <div>
                            <label htmlFor="number">Age:</label>
                            <input type="age" id='age' value={formik.values.age} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                            className={'form-control' + formik.values.age && formik.errors.age ? 'error': ''} 
                            />
                            {formik.values.age && formik.errors.age ? <div className='error-message'></div>:null}
                        </div>
                        <button type='submit'>{isEditing !== null ? 'Updete':'Add'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormCrud