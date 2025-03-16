document.getElementById('cambiarPantalla').addEventListener('click', function() {
    document.getElementById('pantalla1').style.display = 'none';
    document.getElementById('pantalla2').style.display = 'block';
});

document.getElementById('volverPantalla').addEventListener('click', function() {
    document.getElementById('pantalla2').style.display = 'none';
    document.getElementById('pantalla1').style.display = 'block';
});

document.getElementById('cambiarPestaña').addEventListener('click', function() {
    window.open('index2.html');
    window.close('index1.html');
});