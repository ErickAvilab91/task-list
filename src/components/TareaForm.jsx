import React, { useState } from 'react';


function TareaForm({ agregarTarea }) {

  const [tarea, setTarea] = useState('');
  const [taskDescription, setTaskDescription] = useState('')
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    setTarea(e.target.value);
  };

  const handleDescriptionChange = (e)=>{
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tarea.trim().length < 3) {
        setFormError('El nombre de la tarea debe tener al menos 3 caracteres.');
        return;
    }
    agregarTarea({ texto: tarea, descripcion: taskDescription, completada: false });
      setTarea('');
      setTaskDescription('');
      setFormError('');
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={handleInputChange}
      />
      <ul>
        <br/>
      <textarea
      placeholder='Descripcion'
      value={taskDescription}
      onChange={handleDescriptionChange}
      />
      </ul>
      <button type="submit">Agregar</button>
      {formError && <p className='error-message'>{formError}</p>}
       
    </form>

  ); 
}

export default TareaForm;