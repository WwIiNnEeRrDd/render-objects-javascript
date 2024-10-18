const propiedades_venta = [ 
    {
      nombre: 'Casa en la Playa',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepbMAMK6DY8jjZnKgqk45IFHs8-DGmzAURA&s',
      descripcion: 'Hermosa casa frente al mar con acceso privado a la playa.',
      ubicacion: 'Costa del Sol',
      habitaciones: 4,
      costo: 350000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Apartamento en el Centro',
      src: 'https://media.prestigepanamarealty.com/uploads/2023/05/21064345/5.-ph-alpha-dorado-panama-scaled.jpg',
      descripcion: 'Moderno apartamento en el corazón de la ciudad, cerca de todos los servicios.',
      ubicacion: 'Ciudad Central',
      habitaciones: 2,
      costo: 120000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Chalet de Montaña',
      src: 'https://media.traveler.es/photos/6137839032d932c80fcba9a5/16:9/w_2580,c_limit/15474.jpg',
      descripcion: 'Acogedor chalet en las montañas, ideal para desconectar y disfrutar de la naturaleza.',
      ubicacion: 'Sierra Nevada',
      habitaciones: 3,
      costo: 250000,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Villa con Piscina',
      src: 'https://a0.muscache.com/im/pictures/miso/Hosting-9377561/original/03f79de6-434b-4e12-a66c-a9ab7082fab8.jpeg?im_w=720',
      descripcion: 'Lujosa villa con piscina y jardines, perfecta para familias grandes.',
      ubicacion: 'Zona Residencial',
      habitaciones: 5,
      costo: 500000,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Casa de Campo',
      src: 'https://i0.wp.com/casadecampoliving.com/wp-content/uploads/2022/10/Casa-AZ-1-1.jpg?fit=1000%2C667&ssl=1',
      descripcion: 'Amplia casa de campo con terrenos para cultivo y cría de animales.',
      ubicacion: 'Valle Verde',
      habitaciones: 6,
      costo: 300000,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Cabaña en el Lago',
      src: 'https://i.pinimg.com/236x/df/3b/47/df3b47ac9572574dc8206079a5de7b08.jpg',
      descripcion: 'Cabaña rústica junto al lago, ideal para vacaciones relajantes.',
      ubicacion: 'Lago Azul',
      habitaciones: 2,
      costo: 180000,
      smoke: false,
      pets: false
    }
  ];

  
function construirCard(venta){
    const htmlInmueble = `

        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${venta.src}" class="card-img-top"/>

                <div class="card-body">
                    <h5 class="card-title">${venta.nombre}<h5>
                    <p class="card-text">${venta.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${venta.habitaciones}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
                    <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> ${venta.smoke}
                    </p>
                    <p class="text-success">
                        <i class="fas fa-paw"></i> ${venta.pets}
                    </p>
                </div>
            </div>
        </div>
    `

    if(venta.smoke){
        `<p class="text-success">Se permite fumar</p>`
    }else{
        `<p class="text-danger">No se permite fumar</p>`
    }

    if(venta.pets){
        `<p class="text-success">Mascotas permitidas</p>`
    }else{
        `<p class="text-danger">Mascotas no permitidasr</p>`
    }

    return htmlInmueble
}

const divCards = document.querySelector("#fila");
let htmlInmuebles = '';

for(let venta of propiedades_venta){

    const divCard = construirCard(venta)
    htmlInmuebles += `${divCard}`
}
divCards.innerHTML = htmlInmuebles