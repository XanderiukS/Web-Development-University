export interface Videojuego {
    id: number;
    titulo: string;
    genero: string;
    descripcion: string;
    imagen: string;
    precioActual: number;
    precioOferta: boolean;
    precioDescuento?: number;
    }