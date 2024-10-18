const propiedades_alquiler = [
    {
        nombre: 'Casa del Sol',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/577145757.jpg?k=426dc1ebb3688106fa83d1a1fccb76c1b7798bf7e020731e99c588d206b3ebbc&o=&hp=1',
        descripcion: 'Hermosa casa con jardín y vista al mar.',
        ubicacion: 'Playa Venao, Panamá',
        habitaciones: 3,
        costo: 1200,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento Urbano',
        src: 'https://img.freepik.com/fotos-premium/elegante-apartamento-urbano-diseno-moderno-vista-panoramica_740543-385.jpg',
        descripcion: 'Moderno apartamento en el centro de la ciudad.',
        ubicacion: 'Ciudad de Panamá, Panamá',
        habitaciones: 2,
        costo: 900,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña Serrana',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/480948345.jpg?k=63748fabd0d88da7fadfff8deb721b31a86fa427be4fc1278624c2330979775b&o=&hp=1',
        descripcion: 'Acogedora cabaña en las montañas.',
        ubicacion: 'Boquete, Chiriquí',
        habitaciones: 2,
        costo: 800,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Villa Tropical',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/510006445.jpg?k=ae2467ad919a959341dfb5d11bb6136e54b7249732dfcc2ddda7fd7bd3a0209b&o=&hp=1',
        descripcion: 'Lujosa villa con piscina privada.',
        ubicacion: 'Bocas del Toro, Panamá',
        habitaciones: 4,
        costo: 1500,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Estudio Moderno',
        src: 'https://img.lovepik.com/photo/40190/0775.jpg_wh300.jpg',
        descripcion: 'Pequeño estudio ideal para parejas o solteros.',
        ubicacion: 'San Francisco, Ciudad de Panamá',
        habitaciones: 1,
        costo: 600,
        smoke: false,
        pets: true
    }
];

function construirCard(alquiler){
    const htmlInmueble = `

        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${alquiler.src}" class="card-img-top"/>

                <div class="card-body">
                    <h5 class="card-title">${alquiler.nombre}<h5>
                    <p class="card-text">${alquiler.descripcion}</p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${alquiler.habitaciones}
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
                    <p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> ${alquiler.smoke}
                    </p>
                    <p class="text-success">
                        <i class="fas fa-paw"></i> ${alquiler.pets}
                    </p>
                </div>
            </div>
        </div>
    `

    if(alquiler.smoke){
        `<p class="text-success">Se permite fumar</p>`
    }else{
        `<p class="text-danger">No se permite fumar</p>`
    }

    if(alquiler.pets){
        `<p class="text-success">Mascotas permitidas</p>`
    }else{
        `<p class="text-danger">Mascotas no permitidasr</p>`
    }

    return htmlInmueble
}

const divCards = document.querySelector("#fila");
let htmlInmuebles = '';

for(let alquiler of propiedades_alquiler){

    const divCard = construirCard(alquiler)
    htmlInmuebles += `${divCard}`
}
divCards.innerHTML = htmlInmuebles