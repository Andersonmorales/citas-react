import React, { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {

 

  return (
    <div className="md:w-1/2 lg:h-3/5 h-screen overflow-scroll">

{pacientes && pacientes.length?(
  <>
  <h2 className="font-black text-center text-3xl">ListadoPacientes</h2>
  <p className='text-xl mt-5 mb-10 text-center'>Administra tus {''}
    <span className="text-indigo-600 font-bold ">Pacientes y citas</span>
  </p>

  {pacientes.map((paciente)=>
       <Paciente
        paciente={paciente}
        key={paciente.id}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
       />
  )}
  </>
):(
  <>
  <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
  <p className='text-xl mt-5 mb-10 text-center'>comienza agregando pacientes {''}
    <span className="text-indigo-600 font-bold ">apareceran en este</span>
  </p>
  </>
)}


    
      
      
    </div>
  )
}

export default ListadoPacientes
