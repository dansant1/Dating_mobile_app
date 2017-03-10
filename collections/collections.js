let Schemas = {};

Anunciantes = new Mongo.Collection('anunciantes');

Postulantes = new Mongo.Collection('postulantes');

Tokens = new Mongo.Collection('tokens');

if ( Meteor.isServer ) {
  Anunciantes._ensureIndex( { nombre: 1, genero: 1, intereses: 1 } );
}

Anunciantes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Anunciantes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Ofertas = new Mongo.Collection('ofertas');

Schemas.Anunciantes = new SimpleSchema({
    nombre: {
        type: String,
        label: "Nombre",
        max: 250
    },
    userId: {
        type: String,
        label: "Usuario"
    },
    piel: {
      type: String,
      label: "Color de piel"
    },
    intereses: {
      type: String,
      label: "Intereses"
    },
    cabello: {
      type: String,
      label: "Color de cabello"
    },
    genero: {
      type: String,
      label: "Genero del anunciante"
    },
    contextura: {
      type: String,
      label: "Medidas"
    },
    edad: {
      type: String,
      label: "Edad del anunciante"
    },
    anuncia: {
      type: Boolean,
      label: "Tiene anuncios si o no"
    },
    calificacion: {
      type: Number,
      decimal: true
    },
    ubicacion: {
      type: String,
      optional: true
    },
    telefono: {
      type: String
    },
    precio: {
      type: String
    },
    destacar: {
      type: Boolean
    }
});

Anunciantes.attachSchema(Schemas.Anunciantes);

Favoritos = new Mongo.Collection('favoritos');

Contactos = new Mongo.Collection('contactos');

Politicas = new Mongo.Collection('politicas');

Terminos = new Mongo.Collection('terminos');

Panico = new Mongo.Collection('panico');

Comentarios = new Mongo.Collection('comentarios');

Tiendas = new Mongo.Collection('tiendas');

let docStore = new FS.Store.GridFS("fotos", {
  maxTries: 3
});


// Creamos la DB para Fotos
Fotos = new FS.Collection("fotos", {
  stores: [docStore]
});

// agregamos los permisos allow/deny
Fotos.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});

// tienda
let docStoret = new FS.Store.GridFS("fotost", {
  maxTries: 3
});


// Creamos la DB para Fotos
FotosTienda = new FS.Collection("fotost", {
  stores: [docStoret]
});

// agregamos los permisos allow/deny
FotosTienda.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});


// Fotos de productos
let docStore2 = new FS.Store.GridFS("fotosp", {
  maxTries: 3
});


// Creamos la DB para Fotos
FotosProductos = new FS.Collection("fotosp", {
  stores: [docStore2]
});

// agregamos los permisos allow/deny
FotosProductos.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});

ComentariosProductos = new Mongo.Collection('comentariosproductos');

Productos = new Mongo.Collection('productos');


// Fotos de productos
let docStore3 = new FS.Store.GridFS("fotosbanner", {
  maxTries: 3
});


// Creamos la DB para Fotos
BannersPub = new FS.Collection("fotosbanner", {
  stores: [docStore2]
});

// agregamos los permisos allow/deny
BannersPub.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});
