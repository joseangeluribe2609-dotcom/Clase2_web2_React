import {Mybutton} from './components/Mybutton'

function App() {
  const tarjetaperesonal = {
    nombre: "pedro",
    apellido: "gonsales",
    edad: 30,
    correo: "pedro.gonsales@example.com",
    Espeligroso: true
  }
  // retornamos un componente padre 
  return (
    <>
      <div>
        <h1>Tarjeta Personal</h1>
        <p>Nombre: {tarjetaperesonal.nombre}</p>
        <p>Apellido: {tarjetaperesonal.apellido}</p>
        <p>Edad: {tarjetaperesonal.edad}</p>
        <p>Correo: {tarjetaperesonal.correo}</p>
      
      <section>
        <h2> datos adicoinales </h2>
        <p> edad: {tarjetaperesonal.edad >= 18 ? 
        <b style={{ color: 'green' }}> Mayor de edad y tiene {tarjetaperesonal.edad} años</b>
        : <b style={{ color: 'red' }}> Menor de edad y tiene {tarjetaperesonal.edad} años</b>
        }
        </p>
      </section>
  </div>
  <Mybutton Espeligroso={tarjetaperesonal.Espeligroso} />
</>

  )
}

export default App  