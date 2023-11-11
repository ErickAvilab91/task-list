import React from 'react';

function ListaTareas({ tareas, seleccionarTarea, eliminarTarea }) {
  return (
    <div>
      <h2>Pendientes:</h2>
      <ul>
        {tareas.map((tarea, index) => (
          !tarea.completada && (
            <li key={index}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => seleccionarTarea(index)}
              />
              <span className={tarea.completada ? 'completada' : ''}>
                {tarea.texto}
              </span>
              {tarea.descripcion && (
                <p>Descripción: {tarea.descripcion}</p>
              )}
              <button onClick={() => eliminarTarea(index)}>❌Eliminar</button>
            </li>
          )
        ))}
      </ul>
      <h2>Completadas:</h2>
      <ul>
        {tareas.map((tarea, index) => (
          tarea.completada && (
            <li key={index}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => seleccionarTarea(index)}
              />
              <span className={tarea.completada ? 'completada' : ''}>
                {tarea.texto}
                {tarea.descripcion && (
                <p>Descripción: {tarea.descripcion}</p>
              )}
              </span>
              <button onClick={() => eliminarTarea(index)}>❌Eliminar</button>
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;