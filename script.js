function pulsePlanet() {
    const planet = document.getElementById('planet');
    
    planet.style.transform = 'scale(1.1)';
    
    setTimeout(() => {
        planet.style.transform = 'scale(1)';
    }, 500);
}
