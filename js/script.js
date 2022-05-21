let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Mbaa Cantik";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/gilangsptra_3/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 24 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "sarapan"
      break;
    case "Siang":
      return "makan siang"
      break;
    case "Malam":
      return "makan malam"
      break;
      case "Sore":
      return "makan"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');  
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai cantikk!',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa makan yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Aku tau ko kamu lagi sibuk banget`,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Lagi pusing banget, cape banget`,
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya kamu :)').then((result) => {
                  Swal.fire(
                    'Jangan keseringan begadang!',
                    '',
                    'error'
                  ).then((result) => {
                    Swal.fire(
                      'Jangan telat makan!',
                      '',
                      'error'
                    ).then((result) => {
                      Swal.fire('Aku dukung kamu terus ko').then((result) => {
                        Swal.fire({ 
                          html : `Inget yaa cantikk, jangan karna kamu salah sekolah kamu jadi males sekolah. Inget kamu punya keluarga dan kamu harus buktiin ke keluarga kamu, kalo kamu bakalan sukses. Belajar tambah dewasa yaa cantik hehe:)` }).then((result) => {
                          Swal.fire({
                            title: 'Oh iya aku mau nanya',
                            text: 'kamu punya cita cita kann?',
                            showDenyButton: false,
                            confirmButtonText: `Punya dong`,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              html: `Semangat terus yaa cantikk<3 aku ngomong kaya gini karna aku sayang banget sama kamu heheh :), maaf juga karna udah sering marah marah sama kamu, dan aku juga minta maaf kalo misalkan kamu lagi ngga mood aku belom bisa balikin mood kamu heheh:) `
                            }).then((result) => {
                              Swal.fire('Makasih yaa cantikk<3 aku cuman pengen ketemu kamu aja ko hehe, maaf juga kalau aku bikin kaya gini terus kamu ngga suka juga gpp ko hehe:)').then((result) => {
                                Swal.fire("See ya! Aku kangen ^-^").then((result) => {
                                  selesai()
                                });
                              })
                            })
                          }
                        });
                        })
                      })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});
