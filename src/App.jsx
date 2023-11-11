import React, { useState, useEffect } from 'react';
import {ChakraProvider, CSSReset, ColorModeScript} from '@chakra-ui/react'
import theme from './components/theme'
import { useColorMode, Button } from '@chakra-ui/react';
import './App.css';
import TareaForm from './components/TareaForm';
import ListaTareas from './components/ListaTareas';



function App() {

  const {colorMode, toggleColorMode} =useColorMode();

  const [tareas, setTareas] = useState(() => {
    const savedTareas = localStorage.getItem('tareas');
    return savedTareas ? JSON.parse(savedTareas) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  const seleccionarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    if (window.confirm('¿Seguro que quieres eliminar esta tarea?')) {
      const nuevasTareas = [...tareas];
      nuevasTareas.splice(index, 1);
      setTareas(nuevasTareas);
  }
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <CSSReset />
    <div className="App">
      <Button onClick={toggleColorMode}>
       {colorMode === 'light' ? 'Modo claro' : 'Modo oscuro'}
      </Button>
      <h1><em>Lista de Tareas</em></h1>
      <TareaForm agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        seleccionarTarea={seleccionarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
    </ChakraProvider>
  );
}

export default App;