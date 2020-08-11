import React from 'react';

const Forms = (props) => {

    console.log('forms props', props)

    return (
        <div>
            {props.forms.map(form => (
                <div key={form.id}>
                    <h2>Name: {form.name}</h2>
                    <p>Email: {form.email}</p>
                    <p>Role: {form.role}</p>
                </div>
            ))}
        </div>
    )

};

export default Forms;