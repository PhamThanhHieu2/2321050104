let listFilm = [
    {
        id : 1,
        name :"vây hãm trên không",
        year :"2022",
        phanloaidotuoi:"K",
        hour :"1 giờ 45 phút",
        nation: "Hàn Quốc",
        type :"Phim chiếu rạp",
        banner : "Hijack-1971-pic1-poster_KP.webp",
        trailer : "https://www.youtube.com/embed/BiRbSHpqCEU"
    },
    {
        id : 2,
        name :"Mưa đỏ",
        year :"2025",
        phanloaidotuoi:"T13",
        hour :"2 giờ 4 phút",
        nation: "Việt Nam",
        type :"Phim chiếu rạp",
        banner : "350x495-muado.jpg",
        trailer : "https://www.youtube.com/embed/eP03zaw425o"
    },
    {
        id: 3,
        name: "Thành Phố Bóng Đêm",
        year :"1998",
        phanloaidotuoi:"R",
        hour :"1 giờ 40 phút",
        nation: "Hàn Quốc",
        banner: "thanh-pho-bong-dem-2024.jpg",
        trailer: "https://www.youtube.com/embed/eP03zaw425o"
    },
    {
        id: 4,
        name: "Nơi Tình Yêu Kết Thúc",
        year :"2024",
        phanloaidotuoi:"T16",
        hour :"2 giờ 10 phút",
        nation: "Thái Lan",
        banner: "66ed5e0215766604667464.jpg",
        trailer: "https://www.youtube.com/embed/eP03zaw425o"
    },
    {
        id: 5,
        name: "Harold Và Cây Bút Phép Thuật",
        year :"2024",
        phanloaidotuoi:"PG",
        hour :"1 giờ 30 phút",
        nation: "Anh",
        banner: "unnamed.png", 
        trailer: "https://www.youtube.com/embed/eP03zaw425o"
    }
];
let bannerElement = document.getElementsByClassName("banner")[0];
let filmYearElment = document.getElementsByClassName("tt-year")[0];
let filmPhanloaidotuoiElment = document.getElementsByClassName("tt-phanloaidotuoi")[0];
let filmHourElment = document.getElementsByClassName("tt-hour")[0];
let filmNationElement = document.getElementsByClassName("tt-nation")[0];
function viewTrailer() {
      let TrailerELement = document.getElementsByClassName("trailer")[0];
      bannerElement.style.display = "none";
      TrailerELement.style.display = "block";
}
function chooseFilm(filmId) {
    let selectedFilm = listFilm.find(film => film.id === filmId);
    bannerElement.src = selectedFilm.banner;
    filmNationElement.innerText = selectedFilm.nation;
    filmYearElment.innerText = selectedFilm.year;
    filmPhanloaidotuoiElment.innerText = selectedFilm.phanloaidotuoi;
    filmHourElment.innerText = selectedFilm.hour; 
}

 

