import React, { useState,useEffect } from "react";
import Error from "./Error";

export const Formulario = ({pacientes,setPacientes,paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setproPietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
   
    const [error,setError] = useState(false);

    useEffect( ()=>{
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setproPietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
        
    },[paciente])

    const generarId = ()=>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)
        return random+fecha
    }

    //Validacion del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
        if([nombre, propietario, email, alta, sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)
        //Objeto de pacente
        const objPaciente={
            nombre,
            propietario, 
            email, 
            alta, 
            sintomas
            
        }
        if(paciente.id){
            //Editando el registro
            objPaciente.id =paciente.id
            const pacientesActualizado =pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente: pacienteState)
            setPacientes(pacientesActualizado);
            setPaciente({})
        }else{
            //Nuevo Registro 
            objPaciente.id = generarId()
            setPacientes([...pacientes, objPaciente])
        }

        //reiniciar el formulario
        setNombre('')
        setproPietario('')
        setEmail('')
        setAlta('')
        setSintomas('')

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">

            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className=" mt-5 text-lg text-center mb-10">
                Añade pacientes y {""}
                <span className="text-indigo-600 font-bold "> Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                action=""
                className="bg-white shadow-md rounded-lg py-10 px-10 mb-10"
            >
                {error && <Error > <p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block font-bold text-black uppercase"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full mt-2 placeholder-gray-500 rounded-md p-2"
                        id="propietario"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block font-bold text-black uppercase"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full mt-2 placeholder-gray-500 rounded-md p-2"
                        id="mascota"
                        value={propietario}
                        onChange={(e) => setproPietario(e.target.value)}

                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block font-bold text-black uppercase"
                    >
                        {" "}
                        email
                    </label>
                    <input
                        type="email"
                        placeholder=" email"
                        className="border-2 w-full mt-2 placeholder-gray-500 rounded-md p-2"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block font-bold text-black uppercase"
                    >
                        {" "}
                        Alta
                    </label>
                    <input
                        type="date"
                        className="border-2 w-full mt-2 placeholder-gray-500 rounded-md p-2"
                        id="alta"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block font-bold text-black uppercase"
                    >
                        {" "}
                        Sintomas
                    </label>
                    <textarea
                        placeholder="Sintomas"
                        id="sintomas"
                        cols="30"
                        rows="10"
                        className="border-2 w-full mt-2 placeholder-gray-500 rounded-md p-2"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
                    className="bg-indigo-600 w-full text-white font-bold uppercase p-3 shadow-lg rounded-lg active:-translate-y-1 hover:bg-indigo-700 cursor-pointer transition-all shadow-indigo-400"
                />
            </form>
        </div>
    );
};

export default Formulario;
