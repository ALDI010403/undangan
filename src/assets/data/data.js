export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Sopiyan mulyana',
            child: 'Putra ke 1',
            father: 'Lorem',
            mother: 'Ipsum',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Maetati',
            child: 'Putri ke 3',
            father: 'Guntur',
            mother: 'Tupi',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2024',
            month: 'Oktober',
            date: '20',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2024',
            month: 'Oktober',
            date: '20',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kp. Pamong Ilir, RT 008/ RW 002, Desa.Kubang Puji, Kec.Pontang, Kab.Serang, Pontang (42192)'
    },

    link: {
        calendar: 'https://calendar.app.google/wtBaexhpKGGfwdjN9',
        map: 'hthttps://maps.app.goo.gl/qtr4fRyUnKBkqtVn7',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxcZUYs5UQRm1sjzg-QgZt-tbQM4ucNov2_3K2AD7W0hzIdL8OsJfJpGPbyVzj0XOTE/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}