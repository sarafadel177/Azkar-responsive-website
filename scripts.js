document.addEventListener('DOMContentLoaded', function() {
    const yesButtons = document.querySelectorAll('.yes');
    yesButtons.forEach(button => {
        button.addEventListener('click', addhere);
    });
});

function addhere(event) {
 
    const button = event.target;

 
    const prayerText = button.closest('.row1').querySelector('.col11:last-child').textContent.trim();


    let items = JSON.parse(localStorage.getItem('prayers')) || [];


    items.push(prayerText);

  
    localStorage.setItem('prayers', JSON.stringify(items));
}

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); 
});


