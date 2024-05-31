document.querySelectorAll('.hovvv').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
        let video = this.querySelector('.hover-video');
        video.style.display = 'block';
        video.play();
    });
    element.addEventListener('mouseleave', function () {
        let video = this.querySelector('.hover-video');
        video.pause();
        video.style.display = 'none';
    });
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: true,
    autoplay: {
        delay: 2500, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    }
});

var swiper = new Swiper('.swiper-container-2', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});

var swiper = new Swiper('.ig-vdo-slider', {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: 1,
    autoplay: {
        delay: 2500, // Delay between transitions (in milliseconds)
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});

const videoFrames = document.querySelectorAll('.video-frame');

videoFrames.forEach(function (frame) {
    const videoId = frame.getAttribute('data-video-id');
    const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&si=AEO4-L5ZKlod8p02`;

    frame.addEventListener('mouseenter', function () {
        swiper.autoplay.stop();
        frame.src = autoplayUrl;
    });

    frame.addEventListener('mouseleave', function () {
        const defaultUrl = `https://www.youtube.com/embed/${videoId}?si=AEO4-L5ZKlod8p02`;
        frame.src = defaultUrl;
        swiper.autoplay.start();
    });
});