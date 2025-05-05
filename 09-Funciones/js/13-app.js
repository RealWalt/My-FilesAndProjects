//funciones en objetos  pero en arrows function
const reproductor = {
    reproducir: id => {console.log(`Reproduciendo cancion con el ID: ${id}`)},  //metodos de propiedad
    
    pausar: () => { console.log('Pausando...') },
    borrar: id => { console.log(`Borrando cancion numero ${id}`); },
    crearPlaylist: nombre => { console.log(`Acabas de crear una PlayList llamada ${nombre}`); }
}

const musica = prompt('QUe musica quieres escuchar?');
const playList = prompt('COmo se llama tu playlist?');

reproductor.reproducir(musica);
reproductor.pausar();
reproductor.borrar(musica);
reproductor.crearPlaylist(playList);