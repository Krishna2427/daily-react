import React, { useEffect, useState } from 'react'
import { Form, Navigate, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup';
import productService from '../services/productService';
import { ErrorMessage, Field, Formik } from 'formik';

const ProductForm = () => {
    const {productid} = useParams();
    const isEdit = !!productid;
    const navgate = useNavigate();
    const [initialValus, setInitialValues] = useState({name:'', price:''});

    const validationSchame = Yup.object({
        name:Yup.string().required("Product Name is required"),
        price:Yup.number().positive('price must be positive').required('price is required'),
    });
    
    useEffect(()=>{
        if(isEdit){
            productService.getProductById(productid)
            .then(res => setInitialValues(res.data))
            .catch(err=> console.log(err));
        }
    },[productid,isEdit]);

    const handleSubmit =(values)=>{
          if(isEdit){
            productService.updateProduct(productid, values)
            .then(()=> navgate('/products'))
            .catch(err=> console.log(err));
          }else{
            productService.createProduct('/products')
            .then(()=> Navigate('/products'))
            .then(err=> console.log(err));
          }
    };

  return (
    <div>
         <h2>{isEdit ? 'edit Product' : 'Add New  Product'}</h2>
         <Formik
              initialValues={initialValus}
              validationSchema={validationSchame}
              enableReinitialize
              onSubmit={handleSubmit}
         >
            <Form>
                <div>
                    <label>Name</label>
                    <Field name="name" type="text"/>
                    <ErrorMessage name='name' component={"div"}/>
                </div>
                <div>
                    <label>Price</label>
                    <Field name="price" type="number"/>
                    <ErrorMessage name='price' component={"div"}/>
                </div>
                <button type='submit'>{isEdit ? 'Update' : 'Create'}</button>
                <button type='button' onClick={()=> navgate('/products')}>Cancel</button>
            </Form>
         </Formik>
    </div>
  )
}

export default ProductForm