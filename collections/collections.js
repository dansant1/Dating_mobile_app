let Schemas = {};

Anunciantes = new Mongo.Collection('anunciantes');

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
    }
});

Anunciantes.attachSchema(Schemas.Anunciantes);

Favoritos = new Mongo.Collection('favoritos');

Schemas.Favoritos = new SimpleSchema({
    de: {
        type: String,
        label: "De quien es la lista de favoritos",
    },
    para: {
        type: String,
        label: "El id del anunciante"
    }
});

Favoritos.attachSchema(Schemas.Favoritos);

Contactos = new Mongo.Collection('contactos');

Comentarios = new Mongo.Collection('comentarios');


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
