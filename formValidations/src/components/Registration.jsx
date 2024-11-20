import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

const Registration = () => {

    const [formData, setFormData] = useState([]);
    {/*input fields*/ }
    
    const initialValues = {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerm: false,
    };

    {/* Resctrictions */ }
    
    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full name is required'),
        userName: Yup.string()
            .required('User name is required')
            .min(6, 'User name should be at least 6 characters')
            .max(10, 'User name should not exceed 10 characters'),
        email: Yup.string()
            .email('Email is in an invalid format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(10, 'Password must not exceed 10 characters'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        acceptTerm: Yup.bool()
            .oneOf([true], 'You must accept the terms and conditions'),
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (data) => {
            setFormData(prevFormData => ([
                ...prevFormData, data
            ]))
            // console.log(formData);
            // console.log(JSON.stringify(data, null, 2));
        },
    });
    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className='container'>
            <div className="col">
                <h1>Registration</h1>
            </div>
            <div className="row">
                <div className="col">
                    <form onSubmit={formik.handleSubmit}>
                        {/* Full Name */}
                        <div className='form-group'>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" name='fullName' id='fullName'
                                className={"form-control" + (formik.errors.fullName && formik.touched.fullName ? ' is-invalid' : '')}
                                onChange={formik.handleChange}
                                value={formik.values.fullName}
                            />
                            <div className='invalid-feedback'>
                                {formik.errors.fullName && formik.touched.fullName ? formik.errors.fullName : null}
                            </div>
                        </div>

                        {/* User Name */}
                        <div className='form-group'>
                            <label htmlFor="userName">User Name</label>
                            <input type="text" name='userName' id='userName'
                                className={"form-control" + (formik.errors.userName && formik.touched.userName ? ' is-invalid' : '')}
                                onChange={formik.handleChange}
                                value={formik.values.userName}
                            />
                            <div className='invalid-feedback'>
                                {formik.errors.userName && formik.touched.userName ? formik.errors.userName : null}
                            </div>
                        </div>

                        {/* Email */}
                        <div className='form-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email'
                                className={"form-control" + (formik.errors.email && formik.touched.email ? ' is-invalid' : '')}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <div className='invalid-feedback'>
                                {formik.errors.email && formik.touched.email ? formik.errors.email : null}
                            </div>
                        </div>

                        {/* Password */}
                        <div className='form-group'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password'
                                className={"form-control" + (formik.errors.password && formik.touched.password ? ' is-invalid' : '')}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            <div className='invalid-feedback'>
                                {formik.errors.password && formik.touched.password ? formik.errors.password : null}
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className='form-group'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name='confirmPassword' id='confirmPassword'
                                className={"form-control" + (formik.errors.confirmPassword && formik.touched.confirmPassword ? ' is-invalid' : '')}
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />
                            <div className='invalid-feedback'>
                                {formik.errors.confirmPassword && formik.touched.confirmPassword ? formik.errors.confirmPassword : null}
                            </div>
                        </div>

                        {/* Accept Terms */}
                        <div className="form-group form-check">
                            <input type="checkbox" name='acceptTerm' id='acceptTerm'
                                className={'form-check-input' + (formik.errors.acceptTerm && formik.touched.acceptTerm ? ' is-invalid' : '')}
                                onChange={formik.handleChange}
                                checked={formik.values.acceptTerm}
                            />
                            <label htmlFor="acceptTerm">I accept the Terms & Conditions</label>
                            <div className="invalid-feedback">
                                {formik.errors.acceptTerm && formik.touched.acceptTerm ? formik.errors.acceptTerm : null}
                            </div>
                        </div>

                        {/* Submit and Reset Buttons */}
                        <div className='form-group'>
                            <button type='submit' className='btn btn-primary'>Register</button>
                            <button type='reset' className='btn btn-warning float-right' onClick={formik.handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mt-5'>
                {formData.length > 0 ?(
                    <table className='table table-primary'>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>ConfirmPassword</th>
                            <th>modify</th>
                        </tr>
                    </thead>
                    <tbody>

                        {formData.map((form, index) => (
                            <tr key={index}>
                                <td>{form.fullName}</td>
                                <td>{form.userName}</td>
                                <td>{form.email}</td>
                                <td>{form.password}</td>
                                <td>{form.confirmPassword}</td>
                                <td>
                                    <button className='btn btn-info'>edit</button>
                                    <button className='btn btn-danger ms-1'>delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                ): <h4 style={{color:'red'}}>No Form Data available</h4>}
            </div>
        </div>
    );
};
export default Registration;


