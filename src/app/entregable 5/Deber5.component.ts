import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    { 
      name: 'Curso para hablar Inglés', 
      price: 45.25, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.gifer.com/KyfI.gif'
    },
    { 
      name: 'Como aprender a programar ', 
      price: 195.22, 
      inventoryStatus: 'OFERTA', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipfCzkXqbSeyx1of-DrGUY6LrU8GgOIys3Q&s'
    },
    { 
      name: 'Como cuidar a un perro', 
      price: 185.25, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://i.pinimg.com/originals/94/22/ab/9422ab503ad892908134e3e8a711b0c5.gif'
    },
    { 
      name: 'los gatos son los nuevos en dominar el mundo? ', 
      price: 175.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWb-RG159LOTRpLSiIxEKy90-XhAoVi7Yag&s'
    },
    { 
      name: 'Netflix o Youtube', 
      price: 8545.36, 
      inventoryStatus: 'VENDIENDO', 
      image: 'https://thumbs.dreamstime.com/b/netflix-contra-youtube-logo-editorial-vector-136495179.jpg'
    },
    { 
      name: 'Clases de Violín', 
      price: 568.36, 
      inventoryStatus: 'OFERTA', 
      image: 'https://i.pinimg.com/originals/ab/a1/39/aba139cea732c3df75d6122a34ed2eaa.gif'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
