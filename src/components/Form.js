import React, { useState } from 'react';

const Form = (props) => {

    const [form, setForm] = useState({name:'', email: '', role:''})

    const handleChanges = event => {
        console.log("event", event.target.value);
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        
        event.preventDefault();
        props.addForm(form);
        setForm({name: '', email: '', role: ''})

    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
                id='name'
                name='name'
                type='text'
                placeholder='Enter Your Name'
                value={form.name}
                onChange={handleChanges}
            />
            <label htmlFor='email'>Email</label>
            <input 
                id='email'
                name='email'
                type='email'
                placeholder='Enter Your Email'
                value={form.email}
                onChange={handleChanges}
            />
            <label htmlFor='role'>Role</label>
            <input 
                id='role'
                name='role'
                type='text'
                placeholder='Enter Your Role'
                value={form.role}
                onChange={handleChanges}
            />
            <button type='submit'>Submit</button>
        </form>
    )

};

export default Form;