import React from 'react'
import { useFormik } from 'formik';


function Demo() {
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                autocomplete="off"
                spellcheck="false"
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Demo
