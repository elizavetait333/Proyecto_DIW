let canciones = ['https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_Ariana_Grande_-_Save_Your_Tears_Remix__FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_After_Hours_FlexyOkay.com.mp3',
             'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Alone_Again_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Blinding_Lights_FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Escape_From_LA_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Faith_FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Final_Lullaby_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Hardest_To_Love_FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Heartless_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_In_Your_Eyes_FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Missed_You_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Nothing_Compares_Bonus_Track__FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Repeat_After_Me_Interlude__FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Save_Your_Tears_FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Scared_To_Live_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Snowchild_FlexyOkay.com.mp3',
            'https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Too_Late_FlexyOkay.com.mp3','https://elizavetait333.github.io/Proyecto_DIW/music/The_Weeknd_-_Until_I_Bleed_Out_FlexyOkay.com.mp3']

//1. Empieza
//1.1 Sirve para seleccionar los elementos
let reproductor = document.getElementById('reproductor')
let disco = document.getElementById('disco')
let nota1 = document.getElementById('noot-1')
let nota2 = document.getElementById('noot-2')
let nota3 = document.getElementById('noot-3')
let nota4 = document.getElementById('noot-4')
let play = document.getElementById('play')
let backward = document.getElementById('backward')
let forward = document.getElementById('forward')
//1. Acaba

//2. Creamos una variable que usaremos para el indice de las canciones
let indiceCancion = 0
//3. Hemos reducido el volumen a 0.2
reproductor.volume = 0.2
//4. Le pasamos la primera canción reproductoria
reproductor.src = canciones[indiceCancion]
//5. EMPIEZA
// Es una funcionalidad para parar el reproductor y las animaciones al pulsar play o reanudarlas si ya están pausadas
play.addEventListener('click', function(){
    if(play.className.includes('pause')){
        reproductor.play()
    }else{
        reproductor.pause()
    }
    play.classList.toggle('pause')
    nota1.classList.toggle('active')
    nota2.classList.toggle('active')
    nota3.classList.toggle('active')
    nota4.classList.toggle('active')
    disco.classList.toggle('running')
    reproductor
})

//5. ACABA

//6. Funcionalidad para reproduccir la canción anterior
backward.addEventListener('click', function(){
    if(indiceCancion >0){
        indiceCancion = indiceCancion-1
        reproductor.src = canciones[indiceCancion]
    }else{
        indiceCancion = canciones.length-1
        reproductor.src = canciones[indiceCancion]
    }
})
//7. Funcionalidad para reproducir la siguiente canción
forward.addEventListener('click', function(){
    if(indiceCancion == canciones.length-1){
        indiceCancion = 0
        reproductor.src = canciones[indiceCancion]
    }else{
        indiceCancion = indiceCancion+1
        reproductor.src = canciones[indiceCancion]
    }
})