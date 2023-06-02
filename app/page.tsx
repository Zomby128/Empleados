"use client"
import { useState } from "react"
import ListasEnlazadasSimples1 from "../utilities/lista-enlazada";
import logo from 'https://w7.pngwing.com/pngs/320/36/png-transparent-stormtrooper-galactic-empire-star-wars-empire-at-war-sith-stormtrooper-logo-monochrome-symmetry.png'

const Page = () => {
  const[nombre, setNombre]=useState('');
  const[edad, setEdad]=useState(0);
  const[email, setEmail]=useState('');
  const[genero, setGenero]=useState('');
  const[imprimir,setImprimir]=useState('');

  const Lista= new ListasEnlazadasSimples1();

  function limpiar(){
    setNombre('');
    setEdad(0);
    setEmail('');
    setGenero('');
    setImprimir('');
  }

  const manejadorFormulario = (event:any) => {
    event.preventDefault();
      console.log(nombre,edad,email,genero);

      setImprimir(' Nombre: ' + nombre + '\n Edad: '+ edad + '\n Email: '+ email + '\n Genero: '+ genero);

      Lista.insertarInicio({
      nombre: nombre,
      edad: edad,
      genero: genero,
      email: email

      });
      console.log(Lista.impresion());

  }

  return (
    <main>
      <center>
      <header className='bg-gray-400 border border-transparent rounded-lg p-4 mb-5'>
        <div className='flex justify-center'>
          <div className='flex items-center'>
            <h3>
              <img src='https://w7.pngwing.com/pngs/320/36/png-transparent-stormtrooper-galactic-empire-star-wars-empire-at-war-sith-stormtrooper-logo-monochrome-symmetry.png' className=" w-12 mr-2" />
                <p className='text-2xl uppercase text-blue-800 font-serif'>
                  Empleados Imperiales
                </p>   
            </h3>  
           </div>
        </div>
      </header>


      <section className='bg-gray-400 border border-transparent rounded-lg p-4 mb-5 '>
     
      <form
        onSubmit={manejadorFormulario}
        className="flex flex-col  text-blue-800 font-serif"
      ><center>
        <input type="text" 
        className="mr-5 mb-3 w-64"
        placeholder="Nombre" 
        value={nombre}
        onChange={(event)=> setNombre(event.target.value)}
        />
      <input 
      type = "text"
      className="mr-5 mb-3 w-64"
      placeholder = "Edad"
      value = {edad}
      onChange={(event) => setEdad(parseInt(event.target.value))}
      />
      <input 
      type = "text"
      className="mr-5 mb-3 w-64"
      placeholder = "Email"
      value = {email}
      onChange={(event) => setEmail(event.target.value)}
      />
      <input 
      type = "text"
      className="mr-5 mb-3 w-64"
      placeholder = "Genero"
      value = {genero}
      onChange={(event) => setGenero(event.target.value)}
      />
        {/* <input type = "submit"/> */}
        <button type="submit" className="mr-5">
          Enviar Datos Imperiales
        </button>
      <button
      onClick={limpiar} 
      >
        Limpiar
      </button>
      <h3>{imprimir}</h3>
      </center>
      </form>
      </section>
      </center>
      
    </main>
  )
}

export default Page