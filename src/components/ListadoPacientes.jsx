import React from 'react'
import Paciente from './Paciente';

export const ListadoPacientes = ({pacientes,setPaciente, eliminarPaciente}) => {



  return (

    <div className='md:w-1/2 lg:w-3/5  '>
      { pacientes && pacientes.length ? 
     <>
      <h2 className='text-center font-black text-3xl '>Listado Pacientes</h2>
      <p className=' mt-5 text-lg text-center mb-10'>Administra tus {''}
        <span className='text-indigo-600 font-bold'>Pacientes y citas</span>
      </p>

   
     {pacientes.map(paciente=>(
   
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente= {setPaciente}
          eliminarPaciente={eliminarPaciente}
        />)     
      )}
     </>:
      
      
        <>
        <h2 className='text-center font-black text-3xl '>No hay Pacientes</h2>
      <p className=' mt-5 text-lg text-center mb-10'>Comienza agregando tus pacientes {''}
        <span className='text-indigo-600 font-bold'>apareceran en este lugar</span>
      </p>
      </>
      }
     
     
    </div>
  )
}

export default ListadoPacientes;