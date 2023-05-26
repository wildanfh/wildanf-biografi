import React, { useState } from "react";

const BlogPost = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-8 mt-8" data-aos="fade-down" data-aos-duration="1000">
      <div className="text-center font-semibold text-xl" data-aos="fade-down" data-aos-duration="1200">
        <h1 className="text-gray-800">Aku Adalah Programmer</h1>
      </div>
      <div className="flex items-center my-8" data-aos="fade-right" data-aos-duration="1500">
        <img
          className="w-10 h-10 rounded-full mr-4 object-cover"
          src={"./images/me.png"}
          alt="Profile"
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">Wildan Firdaus Al Hafidz</p>
          <p className="text-gray-600">May 23, 2023</p>
        </div>
      </div>
      <div className="mt-4" data-aos="fade-right" data-aos-duration="2000">
        <p className="text-gray-800 indent-6">
          Perkenalkan, nama saya Wildan Firdaus Al Hafidz. Saya berasal dari
          Salatiga dan memiliki masa kecil yang menyenangkan. Saat kecil, saya sering
          bermain dengan teman-teman di sekitar dan menghabiskan banyak waktu di
          luar rumah maupun di rumah. Saya suka bermain sepeda, bermain dengan
          kakak dan adik, serta membaca buku.
        </p>
      </div>
      <div className="mt-4 border-b border-gray-200 pb-4" data-aos="fade-right" data-aos-duration="2200">
        <div
          className={`text-gray-800 ${
            isExpanded ? "overflow-visible block" : "overflow-hidden hidden line-clamp-3"
          }`}
        >
          <p className="indent-6" data-aos="fade-left">
            Saya memiliki keluarga yang sangat dekat. Ayah saya bernama Dwi Ana
            Syarifuddin, seorang wiraswasta, sedangkan ibu saya bernama Heksa
            Rini Prabaningsih, seorang guru dan penulis. Saya memiliki seorang
            kakak perempuan bernama Nurul Izzati Mumtaz, yang saat ini adalah
            seorang mahasiswa, serta seorang adik laki-laki dan perempuan
            bernama Daffa Dzaki Al Hafidz dan Anifa Rifka Hanna, yang masih
            bersekolah.
          </p>
          <div className="my-4 flex gap-2 justify-center flex-wrap" data-aos="fade-right">
            <img src="images/code.jpeg" alt="img" className="rounded-lg max-h-32"/>
            <img src="images/book.jpeg" alt="img" className="rounded-lg max-h-32"/>
            <img src="images/film.jpeg" alt="img" className="rounded-lg max-h-32"/>
          </div>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Hobi saya meliputi pemrograman, membaca buku, dan menonton film.
            Olahraga favorit saya adalah berenang. Makanan favorit saya adalah
            rendang, dan saya suka memakai pakaian yang nyaman seperti kaos.
            Buku fiksi dan biografi adalah bacaan favorit saya.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Yang paling mengesankan dan membanggakan dari keluarga saya adalah
            semangat kerja keras dan saling dukungan yang kami tunjukkan satu
            sama lain. Ayah saya adalah sosok yang gigih dan memiliki dedikasi
            tinggi dalam pekerjaannya. Ibu saya adalah orang yang sangat
            perhatian dan selalu mendukung kami dalam setiap hal.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Dalam keluarga kami, kami menerapkan pola pendidikan yang
            mengedepankan nilai-nilai seperti iman kepada Allah, taqwa,
            kejujuran, disiplin, kerja keras, dan saling menghargai. Kami
            diajarkan untuk selalu berusaha semaksimal mungkin, menghormati
            orang lain, dan menjadi individu yang bertanggung jawab.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Perjalanan pendidikan saya dimulai dari pendidikan dasar hingga
            sekolah menengah atas. Setiap jenjang pendidikan memberikan
            pengalaman yang berharga, baik itu pengalaman positif maupun
            negatif.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Guru paling mengesankan bagi saya adalah seorang guru adab di
            sekolah. Beliau memiliki pengetahuan yang luas mengenai nilai-nilai
            adab dan berkomitmen untuk mengajarkannya kepada para siswa. Beliau
            tidak hanya memberikan pelajaran secara teoritis, tetapi juga mampu
            mengaitkan nilai-nilai adab dengan kehidupan sehari-hari dan
            memberikan contoh nyata. Namun, guru yang paling menyebalkan bagi
            saya adalah seorang guru yang sering menunjukkan ketidakpedulian
            terhadap siswanya
          </p>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Motivasi saya memilih kuliah di Jerman adalah karena negara tersebut
            memiliki sistem pendidikan yang berkualitas tinggi dan terkenal
            dalam bidang teknologi terutama pemrograman.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Saya tertarik untuk mendapatkan pengalaman belajar di lingkungan
            internasional dan mengembangkan keterampilan bahasa asing saya.
            Program Ausbildung juga menarik bagi saya karena menawarkan
            kombinasi antara pendidikan teori dan pelatihan praktis yang dapat
            meningkatkan keterampilan profesional saya.
          </p>
          <img src="images/felix.jpeg" alt="img" className="my-4 rounded-lg h-36 m-auto" data-aos="fade-left"/>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Tokoh agama atau ulama yang menjadi idola bagi saya adalah Ust.
            Felix Siauw, karena beliau memiliki pemahaman yang mendalam tentang
            agama, pemikiran yang kritis, dan dedikasi yang tinggi dalam
            menyebarkan nilai-nilai kebaikan.
          </p>
          <div className="my-4 flex gap-2 justify-center flex-wrap" data-aos="fade-right">
            <img src="images/muhammad.jpg" alt="img" className="rounded-lg max-h-32"/>
            <img src="images/tereliye.jpg" alt="img" className="rounded-lg max-h-32"/>
          </div>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Tokoh politik idola yang telah meninggal bagi saya adalah Nabi
            Muhammad SAW, karena beliau adalah pemimpin yang membawa umat yang
            berada dalam keterpurukan menjadi umat terbaik sepanjang masa. Tokoh
            politik yang masih aktif yang saya kagumi adalah Pak Anies Baswedan,
            karena beliau memiliki visi yang kuat untuk masa depan negara dan
            berkomitmen untuk memajukan kesejahteraan rakyat. Di luar kedua
            kategori tersebut, saya mengagumi seorang penulis bernama Tere Liye
            karena tulisan-tulisannya yang sangat menginspirasi.
          </p>
          <img src="images/jerman.jpeg" alt="img" className="my-4 rounded-lg h-36 m-auto" data-aos="fade-left"/>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Motivasi utama saya kuliah di Jerman adalah untuk mendapatkan
            pendidikan yang berkualitas dan peluang karir yang lebih baik di
            masa depan. Saya memilih Ausbildung karena saya tertarik pada
            kombinasi antara teori dan praktik yang ditawarkan. Jurusan yang
            ingin saya ambil adalah teknik informatika, karena saya memiliki
            minat dan keterampilan dalam bidang teknologi informasi.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Lima keunggulan pribadi saya adalah kreatif, disiplin, praktis,
            inovatif, dan berorientasi pada hasil. Lima kelemahan diri saya
            adalah cenderung menghindari konflik, terlalu keras pada diri
            sendiri, kurang komunikatif, terkadang acuh, dan kurangnya
            kepercayaan diri.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Sebagai seorang muslim, kewajiban saya adalah menjalankan ibadah
            lima waktu, mematuhi ajaran agama, menjaga akhlak yang baik, dan
            berkontribusi positif untuk masyarakat dan negara. Sebagai warga
            negara, kewajiban saya termasuk mematuhi hukum, menjaga keamanan
            negara, menghormati hak asasi manusia, dan berpartisipasi dalam
            kegiatan masyarakat.
          </p>
          <img src="images/adab.jpg" alt="img" className="my-4 rounded-lg h-36 m-auto" data-aos="fade-right"/>
          <p className="indent-6 mt-4" data-aos="fade-right">
            Adab dalam kehidupan seperti akar yang kuat pada pohon yang
            menjulang tinggi. Ia memberikan dasar yang kokoh bagi perilaku dan
            karakter seseorang. Seperti pohon yang tumbuh dan berbuah, adab juga
            menghasilkan buah kebaikan.
          </p>
          <p className="indent-6 mt-4" data-aos="fade-left">
            Analogi ini menggambarkan pentingnya adab dalam mengarahkan tindakan
            kita dalam kehidupan sehari-hari. Adab membentuk kesopanan, sikap
            hormat, kesederhanaan, dan kesabaran. Ia mengajarkan kita untuk
            bersikap sopan terhadap orang lain, menghormati perbedaan, menjaga
            kesederhanaan dalam segala hal, dan mempertahankan kesabaran dalam
            menghadapi cobaan.
          </p>
        </div>
        {!isExpanded && (
          <button className="text-blue-500 mt-2" onClick={handleReadMore}>
            Read more...
          </button>
        )}
      </div>
      <div className="mt-4">
        <p className="text-center text-gray-500 text-xs">
          © 2023 My Autobiografi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
