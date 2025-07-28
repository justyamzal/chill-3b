//----- Toggle Profile User -----//
const avatar = document.querySelector('.user-profile');
const dropdown = document.getElementById('dropdownProfile');

avatar.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// klik di luar dropdown untuk menutup
window.addEventListener('click', (e) => {
    if (!avatar.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

//----- SlideJs -------//
document.addEventListener('DOMContentLoaded', function () {

    const splide = new Splide('.splide-history', {

        type: 'loop', // Mirip dengan loop: true
        perPage: 4, // Mirip dengan slidesPerView: 4
        gap: '24px', // Mirip dengan spaceBetween: 24
        borderRadius: '8px', // Mirip dengan borderRadius: 10px
        // Opsi tambahan untuk pengalaman yang lebih baik
        pagination: false, // Sembunyikan titik-titik navigasi
        arrows: true, // Tampilkan tombol panah
        drag: 'free', // Memungkinkan drag/geser yang lebih bebas
        snap: true, // Efek 'snap' ke slide terdekat saat di-drag

        // Breakpoints untuk responsivitas (mirip dengan SwiperJS)
        breakpoints: {
            1280: {
                perPage: 3.5,
                gap: '24px',

            },
            1024: {
                perPage: 2.5,
                gap: '16px',
            },
            480: {
                perPage: 1.3,
                gap: '24px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
            360: {
                perPage: 1.1,
                gap: '24px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
        },
    }).mount();

    new Splide('.splide-top-rating', {
        type: 'loop',
        perPage: 5,
        gap: '10px',
        pagination: false,
        arrows: true,
        drag: 'free', // Memungkinkan drag/geser yang lebih bebas
        snap: true, // Efek 'snap' ke slide terdekat saat di-drag

        breakpoints: {
            1280: {
                perPage: 5,
                gap: '24px',

            },
            1024: {
                perPage: 4.,
                gap: '24px',
            },
            480: {
                perPage: 3.5,
                gap: '15px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
            360: {
                perPage: 3.3,
                gap: '15px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
        },
    }).mount();

    new Splide('.splide-trending, .splide-new-release', {
        type: 'loop',
        perPage: 5,
        gap: '10px',
        pagination: false,
        arrows: true,
        drag: 'free', // Memungkinkan drag/geser yang lebih bebas
        snap: true, // Efek 'snap' ke slide terdekat saat di-drag

        breakpoints: {
            1280: {
                perPage: 5,
                gap: '24px',

            },
            1024: {
                perPage: 4.,
                gap: '24px',
            },
            480: {
                perPage: 3.5,
                gap: '15px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
            360: {
                perPage: 3.3,
                gap: '15px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
        },
    }).mount();

    
    new Splide('.splide-new-release', {
        type: 'loop',
        perPage: 5,
        gap: '10px',
        pagination: false,
        arrows: true,
        drag: 'free', // Memungkinkan drag/geser yang lebih bebas
        snap: true, // Efek 'snap' ke slide terdekat saat di-drag

        breakpoints: {
            1280: {
                perPage: 5,
                gap: '24px',

            },
            1024: {
                perPage: 4.,
                gap: '24px',
            },
            480: {
                perPage: 3.5,
                gap: '15px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
            360: {
                perPage: 3.3,
                gap: '15px',
                arrows: false,
                snap: true,
                drag: 'true',
            },
        },
    }).mount();


});

//----- Accordion Link -----//
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = header.classList.contains('active');
        
        // Close other accordion link
        document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
        
        // Toggle's now condition
        if(!isOpen){
            header.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});