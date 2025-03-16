window.onclick = function(event) {
    if (!event.target.matches('#Proyectos')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

document.getElementById('cambiarPestaña').addEventListener('click', function() {
    window.open('index2.html');
    window.close('index.html');
});

