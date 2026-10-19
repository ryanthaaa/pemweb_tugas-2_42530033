const films = [
    {
        id: 1,
        title: 'Interstellar',
        genre: 'Sci-Fi',
        year: 2014,
        director: 'Christopher Nolan',
        duration: '169 menit',
        synopsis: 'Sekelompok penjelajah melakukan perjalanan melintasi ruang angkasa untuk mencari tempat tinggal baru bagi manusia.',
        poster: '/images/interstellar.png'
    },
    {
        id: 2,
        title: 'The Dark Knight',
        genre: 'Action',
        year: 2008,
        director: 'Christopher Nolan',
        duration: '152 menit',
        synopsis: 'Batman berusaha menghentikan Joker yang mengancam keamanan dan ketertiban Gotham City.',
        poster: '/images/the-dark-knight.png'
    },
    {
        id: 3,
        title: 'The Avengers',
        genre: 'Action',
        year: 2012,
        director: 'Joss Whedon',
        duration: '143 menit',
        synopsis: 'Sekelompok pahlawan bekerja sama untuk menghadapi ancaman yang membahayakan bumi.',
        poster: '/images/avengers.png'
    },  
    {
        id: 4,
        title: 'Breaking Bad',
        genre: 'Crime',
        year: 2008,
        director: 'Vince Gilligan',
        duration: '47 menit/episode',
        synopsis: 'Seorang guru kimia yang didiagnosis kanker mulai memproduksi narkoba bersama mantan muridnya demi mengamankan masa depan keluarganya.',
        poster: '/images/breaking-bad.png'
    },
    {
        id: 5,
        title: 'Lord of the Rings',
        genre: 'Fantasy',
        year: 2001,
        director: 'Peter Jackson',
        duration: '178 menit',
        synopsis: 'Frodo Baggins memulai perjalanan berbahaya untuk menghancurkan cincin yang dapat membawa kehancuran bagi Middle-earth.',
        poster: '/images/the-lord-of-the-rings.png'
    },
    {
        id: 6,
        title: 'Barbie',
        genre: 'Comedy',
        year: 2023,
        director: 'Greta Gerwig',
        duration: '114 menit',
        synopsis: 'Barbie meninggalkan Barbieland dan memasuki dunia nyata untuk mencari jawaban tentang dirinya dan kehidupannya.',
        poster: '/images/barbie.png'
    },
    {
        id: 7,
        title: 'Fast & Furious',
        genre: 'Action',
        year: 2009,
        director: 'Justin Lin',
        duration: '107 menit',
        synopsis: 'Dominic Toretto dan Brian O’Conner kembali bekerja sama untuk menghadapi musuh dalam dunia balap jalanan.',
        poster: '/images/fast&furious.png'
    },
    {
        id: 8,
        title: 'Fast Five',
        genre: 'Action',
        year: 2011,
        director: 'Justin Lin',
        duration: '130 menit',
        synopsis: 'Dominic Toretto dan timnya merencanakan perampokan besar sambil menghindari kejaran agen federal.',
        poster: '/images/fast-five.png'
    },
    {
        id: 9,
        title: 'Furious 7',
        genre: 'Action',
        year: 2015,
        director: 'James Wan',
        duration: '137 menit',
        synopsis: 'Keluarga Dominic Toretto menghadapi ancaman baru dari seorang musuh yang ingin membalas dendam.',
        poster: '/images/furious-7.png'
    },
    {
        id: 10,
        title: 'The Conjuring',
        genre: 'Horror',
        year: 2013,
        director: 'James Wan',
        duration: '112 menit',
        synopsis: 'Dua penyelidik paranormal membantu sebuah keluarga yang mengalami gangguan misterius di rumah mereka.',
        poster: '/images/the-conjuring.png'
    },
    {
        id: 11,
        title: 'A Quiet Place',
        genre: 'Horror',
        year: 2018,
        director: 'John Krasinski',
        duration: '90 menit',
        synopsis: 'Sebuah keluarga berjuang bertahan hidup di dunia yang dihuni makhluk pemburu berdasarkan suara.',
        poster: '/images/a-quit-place.png'
    },
    {
        id: 12,
        title: 'Who Am I',
        genre: 'Thriller',
        year: 2014,
        director: 'Baran bo Odar',
        duration: '105 menit',
        synopsis: 'Seorang pemuda ahli komputer bergabung dengan kelompok hacker yang mengejar ketenaran di dunia maya.',
        poster: '/images/who-am-i.png'
    }

]

module.exports = films;

// console.log(films)