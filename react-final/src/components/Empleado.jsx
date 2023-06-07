import React from 'react';
import "./Empleado.css"

const Empleado = ({ empleado, numero }) => {
    const { identificacion, nombres, fecha_nacimiento, tiempo_contrato, valor_contrato, estado } = empleado;
  
    const calcularPorcentaje = () => {
      return `${tiempo_contrato}%`;
    };
  
    return (
      <tr>
        <td>{numero}</td> {/* Mostramos el número consecutivo */}
        <td>{identificacion}</td>
        <td>{nombres}</td>
        <td>{fecha_nacimiento}</td>
        <td>
          <div className="progress-bar">
            <div className="progress" style={{ width: calcularPorcentaje() }}>
              {calcularPorcentaje()}
            </div>
          </div>
        </td>
        <td>{valor_contrato}</td>
        <td>
          <span className={estado ? 'badge badge-success' : 'badge badge-danger'}>
            {estado ? 'Activo' : 'Inactivo'}
          </span>
        </td>
      </tr>
    );
  };
  
  export default Empleado;
