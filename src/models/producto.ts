import usuario from "./usuario";

type producto = {
  nombre: string;
    precio: number;
    stock: number;
    descripcion?: string;
    vendedor: string;
    comentarios: usuario[];
};
export default producto;