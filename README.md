# Rayfilms — Aplikasi Katalog Film

Rayfilms adalah aplikasi katalog film sederhana yang dibuat menggunakan **Node.js, Express.js, dan EJS**. Aplikasi ini menampilkan daftar film, menyediakan filter berdasarkan genre, menampilkan detail film berdasarkan ID, serta menggunakan EJS Partials agar bagian halaman dapat digunakan kembali.

## Fitur

- Menampilkan daftar film.
- Menyaring film berdasarkan genre menggunakan **Query Parameter**.
- Menampilkan detail film berdasarkan ID menggunakan **Route Parameter**.
- Menggunakan EJS Partials untuk bagian header, navbar, dan footer.
- Menampilkan halaman 404 untuk URL atau film yang tidak ditemukan.
- Menyajikan file CSS dan gambar dari folder `public`.

## Teknologi

- Node.js
- Express.js
- EJS
- HTML dan CSS

## Struktur Direktori

```text
katalog-film/
├── app.js
├── controllers/
│   └── film.controller.js
├── models/
│   └── film.model.js
├── routes/
│   └── film.routes.js
├── views/
│   ├── pages/
│   │   ├── films.ejs
│   │   ├── detail-film.ejs
│   │   └── 404.ejs
│   └── partials/
│       ├── header.ejs
│       ├── navbar.ejs
│       └── footer.ejs
└── public/
    ├── css/
    │   └── style.css
    └── images/
        └── (poster film)
```

> Catatan: struktur di atas menggambarkan susunan file yang digunakan/diharapkan pada proyek. Jika nama atau file di proyek aktual berbeda, sesuaikan bagian ini dengan struktur yang benar.

## Penjelasan Bagian Utama

### 1. `app.js`

File utama aplikasi Express. Bagian ini mengatur EJS sebagai view engine, menentukan folder `views`, menyajikan file statis dari `public`, mendaftarkan rute, dan menjalankan server.

### 2. `models/film.model.js`

Menyimpan data film yang digunakan aplikasi. Data dapat mencakup ID, judul, genre, tahun rilis, sutradara, durasi, sinopsis, dan lokasi poster.

### 3. `controllers/film.controller.js`

Mengatur logika aplikasi, seperti mengambil data genre dari `req.query`, menyaring film, mencari film berdasarkan `req.params.id`, lalu mengirim data ke template melalui `res.render()`.

### 4. `routes/film.routes.js`

Mendefinisikan rute untuk halaman katalog dan halaman detail film, kemudian menghubungkannya dengan fungsi controller.

### 5. `views/`

Berisi template EJS yang dirender menjadi HTML oleh server.

- `pages/films.ejs`: halaman katalog film.
- `pages/detail-film.ejs`: halaman detail satu film.
- `pages/404.ejs`: halaman ketika halaman atau data yang diminta tidak ditemukan.
- `partials/`: bagian yang dapat digunakan kembali, seperti header, navbar, dan footer.

### 6. `public/`

Berisi aset statis yang dapat diakses browser, seperti file CSS dan poster film. Contohnya, file `public/images/the-conjuring.png` diakses melalui URL `/images/the-conjuring.png`.

## Menjalankan Aplikasi

Pastikan Node.js sudah terpasang.

1. Buka terminal pada folder proyek.
2. Instal dependensi jika belum tersedia:

   ```bash
   npm install
   ```

3. Jalankan server:

   ```bash
   node app.js
   ```

4. Buka browser dan akses:

   ```text
   http://localhost:3000
   ```

> Jika proyek belum memiliki `package.json` atau dependensi Express dan EJS belum terpasang, inisialisasi proyek dan instal dependensi yang diperlukan terlebih dahulu, misalnya `npm init -y` lalu `npm install express ejs`.

## Contoh URL

| Tujuan | Contoh URL |
|---|---|
| Halaman katalog | `http://localhost:3000/` |
| Filter genre Action | `http://localhost:3000/?genre=Action` |
| Detail film dengan ID 1 | `http://localhost:3000/films/1` |
| Contoh ID yang tidak ditemukan | `http://localhost:3000/films/999` |
| Contoh URL yang tidak tersedia | `http://localhost:3000/halaman-ngawur` |

Hasil filter bergantung pada genre yang benar-benar tersedia di data film. ID `999` hanya menjadi contoh untuk menguji penanganan film yang tidak ditemukan.

## Konsep yang Digunakan

### Query Parameter — `req.query`

Query Parameter mengambil nilai yang berada setelah tanda `?` pada URL. Pada aplikasi ini, `req.query.genre` mengambil genre yang diminta, lalu data film disaring berdasarkan genre tersebut.

Contoh:

```text
/?genre=Action
```

### Route Parameter — `req.params`

Route Parameter mengambil nilai dari bagian URL yang sesuai dengan pola rute. Pada aplikasi ini, `req.params.id` mengambil ID film dari URL detail.

Contoh:

```text
/films/1
```

### EJS Partials — `include()`

EJS Partials memungkinkan bagian halaman yang berulang, seperti navbar dan footer, disimpan dalam file terpisah. Bagian tersebut kemudian dipanggil dari template utama menggunakan `include()`.

Contoh:

```ejs
<%- include('../partials/navbar') %>
```

### `res.render()`

`res.render()` digunakan untuk merender template EJS dengan data yang dikirimkan oleh controller. EJS memproses sintaks templatenya di server, kemudian hasil berupa HTML dikirim ke browser. Karena itu, sintaks EJS seperti `<%= film.title %>` tidak terlihat sebagai sintaks template pada **View Page Source**.

### Penanganan 404

Aplikasi dapat menampilkan halaman 404 saat URL tidak terdaftar atau ID film tidak ditemukan. Middleware untuk URL yang tidak terdaftar harus diletakkan setelah rute aplikasi. Controller detail juga perlu merender halaman 404 ketika film tidak ditemukan.

## Ketentuan Video Demonstrasi

Video harus mengikuti alur pembahasan berikut.

Link Youtube : https://www.youtube.com/watch?v=BzPrRIepigs

### 1. Pembuka — maksimal 30 detik

- Sebutkan nama lengkap dan NIM.
- Sebutkan tema yang dipilih.
- Tampilkan aplikasi yang sedang berjalan di browser secara singkat.

### 2. Penjelasan Rute & Parameter — 1,5–2 menit

**Query Parameter**
- Buka editor kode dan tunjukkan baris yang menggunakan `req.query`.
- Jelaskan bagaimana nilai query digunakan untuk menyaring data.
- Beralih ke browser dan demonstrasikan URL filter, misalnya `/?genre=Action`.

**Route Parameter**
- Tunjukkan rute detail yang menggunakan `/:id` dan kode yang menggunakan `req.params`.
- Jelaskan bagaimana ID digunakan untuk mencari film tertentu.
- Beralih ke browser dan demonstrasikan URL detail, misalnya `/films/1`.

### 3. Penjelasan Modularitas EJS Partials — 1 menit

- Buka file partials, khususnya `navbar.ejs` dan `footer.ejs`.
- Tunjukkan baris pemanggilan `include()` pada view utama, seperti `films.ejs`.
- Jelaskan bahwa partials membantu menggunakan kembali bagian halaman tanpa menulis ulang kode yang sama.

### 4. Penjelasan Alur `res.render()` — 1–1,5 menit

- Tunjukkan pemanggilan `res.render()` di controller beserta objek data yang dikirim.
- Jelaskan bahwa server menggabungkan data dengan template EJS dan menghasilkan HTML sebelum mengirimkannya ke browser.
- Buka aplikasi di browser, tekan **Ctrl + U** untuk membuka **View Page Source**.
- Tunjukkan bahwa source yang dikirim ke browser berupa HTML hasil render, bukan sintaks template EJS.

**Perkiraan durasi total:** sekitar 4–5 menit, mengikuti batas waktu pada setiap bagian.

## Checklist Sebelum Rekaman

- [ ] Server berjalan tanpa error.
- [ ] Aplikasi katalog dapat dibuka di browser.
- [ ] Filter genre bekerja dan hasilnya sesuai.
- [ ] URL detail menampilkan film berdasarkan ID.
- [ ] File `navbar.ejs` dan `footer.ejs` siap ditunjukkan.
- [ ] Pemanggilan `include()` terlihat di view utama.
- [ ] Pemanggilan `res.render()` dan data yang dikirim dapat dijelaskan.
- [ ] **View Page Source** menunjukkan HTML hasil render.
- [ ] Nama lengkap, NIM, dan tema sudah disiapkan.
