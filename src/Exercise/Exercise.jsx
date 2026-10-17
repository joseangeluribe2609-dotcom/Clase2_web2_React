//1. Crea dos objetos con informacion cono informacion de mascotas: nombre, especie, edad, vacunas, adoptado, etc.
//2. Luego construye un componente estatico TarjetaMascotas que reciba un objeto como props y muestre la informacion de la mascota.
//3. 
import {TarjetaMascotas} from './TarjetaMascotas'

export const Exercise = () => {
    const tarjetaMascotas = [
        {
            nombre: "Firulais",
            especie: "perro",
            edad: 3,
            vacunas: ["rabia", "parvovirus", "moquillo"],
            adoptado: true
        },{
            nombre: "Mimi",
            especie: "gato",
            edad: 2,
            vacunas: ["rabia", "panleucopenia"],
            adoptado: false
        }
    ]
    return (
        <>
        <div>
            <h1>Tarjeta de Mascotas</h1>
            {tarjetaMascotas.map((mascota, index) => (
                <TarjetaMascotas key={index} {...mascota} />
            ))}
        </div>
        
        </>
    );
}
