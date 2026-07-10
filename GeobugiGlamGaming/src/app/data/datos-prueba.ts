import { Videojuego } from '../models/videojuego.model';

export const CATALOGO_VIDEOJUEGOS: Videojuego[] = [
  {
    id: 1,
    titulo: 'PlayStation 5',
    genero: 'Consola de sobremesa',
    descripcion: 'La potencia de Sony con SSD ultra rápido y trazado de rayos.',
    imagen: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    precioActual: 499.99,
    precioOferta: false
  },
  {
    id: 2,
    titulo: 'Xbox Series X',
    genero: 'Consola de sobremesa',
    descripcion: 'La consola más potente de Microsoft. 4K nativo y compatibilidad total con Game Pass para acceso a cientos de juegos.',
    imagen: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    precioActual: 395,
    precioOferta: true,
    precioDescuento: 299.99,
  },
  {
    id: 3,
    titulo: 'Nintendo Switch',
    genero: 'Consola de portátil',
    descripcion: 'La consola híbrida de Nintendo que se puede usar como consola de sobremesa o como sistema portátil.',
    imagen: 'https://images.unsplash.com/photo-1612036781124-847f8939b154?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    precioActual: 145.99,
    precioOferta: true,
    precioDescuento: 100.49
  },
  {
    id: 4,
    titulo: "Nintendo Switch 2 (Next Gen)",
    genero: "Consola Híbrida",
    descripcion: "La esperada sucesora de Nintendo con retrocompatibilidad y potencia mejorada para gráficos en alta definición.",
    imagen: "https://images.unsplash.com/photo-1749138149339-b744bb979317?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    precioActual: 250.99,
    precioOferta: false
  },
  {
    id: 5,
    titulo: "Nintendo 3DS XL",
    genero: "Portátil",
    descripcion: "Un clásico de las portátiles con doble pantalla y efecto 3D sin lentes. Ideal para coleccionistas y amantes de Pokémon.",
    imagen: "https://images.unsplash.com/photo-1632387955207-feda3020ab1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    precioActual: 180.00,
    precioOferta: false
  },
  {
    id: 6,
    titulo: "Retroid Pocket 6",
    genero: "Portátil Android / Emulación",
    descripcion: "Consola portátil de alto rendimiento para emulación avanzada y juegos de Android con controles premium.",
    imagen: "https://www.engadget.com/engadget/heres-the-first-real-look-at-the-retroid-pocket-6-running-ps2-games-193624145/ad36c090-e354-11f0-b7f2-c3cad2d9f9f3.jpg",
    precioActual: 215.00,
    precioOferta: true,
    precioDescuento: 195.00
  },
  {
    id: 7,
    titulo: "Ayn Thor",
    genero: "Portátil Android",
    descripcion: "Dispositivo premium diseñado para el máximo rendimiento en juegos móviles y servicios de streaming como Cloud Gaming.",
    imagen: "https://www.ayntec.com/cdn/shop/files/4fe40f089696834c4906303a743d01c5_d891fc5b-3473-449a-85c1-56663e291fcf.jpg?v=1755855604",
    precioActual: 280.00,
    precioOferta: false
  },
  {
    id: 8,
    titulo: "ASUS ROG Ally",
    genero: "Handheld PC / Windows",
    descripcion: "Una PC gaming completa en tus manos con procesador AMD Ryzen Z1 Extreme y pantalla de 120Hz.",
    imagen: "https://img.pacifiko.com/PROD/resize/1/500x500/B0G2HTSJXT.jpg",
    precioActual: 699.99,
    precioOferta: true,
    precioDescuento: 599.99
  },
  {
    id: 9,
    titulo: "Anbernic RG353V",
    genero: "Portátil Retro",
    descripcion: "Consola vertical con sistema dual (Android/Linux) perfecta para emular consolas clásicas hasta PS1 y N64.",
    imagen: "https://anbernic.com/cdn/shop/products/12_e9da17fc-c287-400a-a79a-28fe7bf4fe1a.jpg?v=1762788813&width=800",
    precioActual: 120.00,
    precioOferta: false
  },
  {
    id: 10,
    titulo: "Ayn Odin 3",
    genero: "Portátil Android Premium",
    descripcion: "La cima de las portátiles Android. Capaz de emular consolas modernas con una autonomía de batería líder en su clase.",
    imagen: "https://static.wixstatic.com/media/4d4c0d_10b15e64ec154873a3116a9a10b29dab~mv2.webp/v1/fit/w_500,h_500,q_90/file.webp",
    precioActual: 450.00,
    precioOferta: false
  }
];