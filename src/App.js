import React, { useState } from 'react';
import Form from './components/Form';
import Forms from './components/Forms';

function App() {

  const [forms, setForms] = useState([]) 

  const addForm = form => {
    
    const newForm = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role
    };
    
    setForms([...forms, newForm])
  
  }

  return (
    <div>
      <h2>This is my Form App.</h2>
      <Form addForm={addForm}/>
      <Forms forms={forms}/>
    </div>
  );
}

export default App;
