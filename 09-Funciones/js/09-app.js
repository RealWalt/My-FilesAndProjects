//funciones en objetos
const reproductor = {
    reproducir: function(id) { //metodos de propiedad
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...')
    },
    borrar: function(id) {
        console.log(`Borrando cancion numero ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Acabas de crear una PlayList llamada ${nombre}`);
    }
}

const musica = prompt('Pon un id de una cancion');

reproductor.reproducir(musica);
reproductor.pausar();
reproductor.borrar(musica);
reproductor.crearPlaylist('GYM EXTREME PHONK BR');