import React from 'react'

export const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {

  const {nombre, propietario, email, alta, sintomas, id} = paciente

  const handleEliminar = ()=>{
    const respuesta = confirm('Desesas eliminar el paciente')
    if(respuesta){
      eliminarPaciente(id)
    }
  }


  return (
    
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-lg '>
            <p className='font-bold mb-3 uppercase text-gray-700'>nombre: {''}
             <span className='font-normal normal-case' >{nombre}</span>
            </p>
            <p className='font-bold mb-3 uppercase text-gray-700'>Propietario: {''}
              <span className='font-normal normal-case' >{propietario}</span>
            </p>
            <p className='font-bold mb-3 uppercase text-gray-700'>email: {''}
            <span className='font-normal normal-case' >{email}</span>
            </p>
             <p className='font-bold mb-3 uppercase text-gray-700'>fecha Alta: {''}
            <span className='font-normal normal-case' >{alta}</span>
            </p>
            <p className='font-bold mb-3 uppercase text-gray-700'>Sintomas: {''}
              <span className='font-normal normal-case' > {sintomas}</span>
            </p>

            <div className='flex gap-5 mt-10 justify-center'>
              <button type='button' className='px-10 py-2 bg-indigo-600 rounded-lg text-white font-bold transition-all active:bg-indigo-800'
              onClick={()=> setPaciente(paciente)}
              >Editar</button>
              <button type='button' className='px-10 py-2 bg-red-600 rounded-lg text-white font-bold transition-all active:bg-red-700'
              onClick={ handleEliminar}
              >Eliminar</button>
            </div>
      </div>
    
  )
}

export default Paciente;