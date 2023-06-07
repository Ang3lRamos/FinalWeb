import React, { useState, useEffect } from 'react';
import Empleado from './components/Empleado';
import "./App.css"

const App = () => {
  const [empleados, setEmpleados] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    fetch('http://89.116.25.43:3500/api/empleados/listar')
      .then(response => response.json())
      .then(data => setEmpleados(data.result))
      .catch(error => console.log(error));
  }, []);

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1);
  };

  return (
    <div className="container">
      <h1>Lista de Empleados</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Identificación</th>
            <th>Nombres</th>
            <th>Fecha de Nacimiento</th>
            <th>Tiempo de Contrato</th>
            <th>Valor de Contrato</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, index) => (
            <Empleado key={empleado.id} empleado={empleado} numero={contador + index + 1} /> // Pasamos el número consecutivo como prop
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
