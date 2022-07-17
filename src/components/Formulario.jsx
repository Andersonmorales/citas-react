import React, { useEffect, useState } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes,paciente,setPaciente}) => {

 
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [alta, setAlta] = useState('')
  const [sintomas, setsintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(()=>{
   if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setsintomas(paciente.sintomas)
   } 
  },[paciente])

  const generarId=()=>{
    const ramdom= Math.random().toString(36).substring(2);
    const fecha= Date.now().toString(36)

    return fecha+ramdom
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    if ([nombre,sintomas,alta,email,propietario].includes('')) {
        
        setError(true);return;
    }else{
      setError(false)
      }

      const objPaciente={
        nombre, 
        sintomas,
        alta,email,
        propietario,
        
      }

      if (paciente.id) {
        /* editando */
       objPaciente.id=paciente.id

       console.log(objPaciente);
       console.log(paciente);

       const pacientesActualizados=pacientes.map(pacienteState=>pacienteState.id===paciente.id
        ? objPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        setPaciente({})
      }else{
        /* nuevo registro */
       objPaciente.id=generarId()
        setPacientes([...pacientes,objPaciente])
      }

    

      //reiniciar el forms
      setsintomas(''),
      setAlta(''),
      setEmail(''),
      setPropietario(''),
      setNombre('')

     

  }


  return (
    <div className="md:w-1/2 lg:h-2/5">
      <h2 className='font-black text-3xl text-center'>Seguiento paciente</h2>

      <p className="text-lg mt-5 text-center">
        Añade pacientes y {``}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
       action="" className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mx-5"
       onSubmit={handleSubmit}
       >
        {error&&<Error mensaje={'todos los campos son juan amtep'} />}

        <div className="mb-5">
          <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input
            type="text"
            placeholder='Nombre de la mascota'
            className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-lg"
            id='mascota'
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor='propietario' className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
          <input
            type="text"
            placeholder='Nombre del propietario'
            className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-lg"
            id='propietario'
            value={propietario}
            onChange={(e)=>setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor='email' className="block text-gray-700 uppercase font-bold">email</label>
          <input
            type="email"
            placeholder='email'
            className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-lg"
            id='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor='alta' className="block text-gray-700 uppercase font-bold">alta</label>
          <input
            type="date"
            className="border-2 w-full pt-2 mt-2 placeholder-gray-400 rounded-lg"
            id='alta'
            value={alta}
            onChange={(e)=>setAlta(e.target.value)}

          />
        </div>
        <div className="mb-5">
          <label htmlFor='sintomas' className="block text-gray-700 uppercase font-bold">sintomas</label>
          <textarea name="" id="sintomas" placeholder='describe los sintomas'
          value={sintomas}
          onChange={(e)=>setsintomas(e.target.value)}
          ></textarea>
        </div>

        <input type='submit' 
        className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-colors"
        value={paciente.id ? 'editar paciente' : 'agreagar paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario