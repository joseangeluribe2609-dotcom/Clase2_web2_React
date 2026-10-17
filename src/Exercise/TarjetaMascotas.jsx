export const TarjetaMascotas = ({ nombre, especie, edad, vacunas, adoptado }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Especie: {especie}</p>
            <p>Edad: {edad}</p>
            <p>Vacunas: {vacunas.join(", ")}</p>
            <p>Adoptado: {adoptado ? "Sí" : "No"}</p>
            








        </div>
    );
};

export default TarjetaMascotas;