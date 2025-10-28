type props = {
    nombre: string;
}

function Saludo({ nombre }: props) {
    return (
        <h1>Hola, {nombre}!</h1>
    );
}
export default Saludo;