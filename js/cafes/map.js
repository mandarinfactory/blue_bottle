const yeoido = new naver.maps.LatLng(37.525817, 126.928338);
const myungdong = new naver.maps.LatLng(37.563498, 126.983001);
const gwangha = new naver.maps.LatLng(37.56941, 126.978827);
const samchung = new naver.maps.LatLng(37.58016, 126.980847);
const samchungHanok = new naver.maps.LatLng(37.580052, 126.980938);
const hannam = new naver.maps.LatLng(37.536095, 127.005211);
const sungsu = new naver.maps.LatLng(37.548074, 127.045691);
const yeoksam = new naver.maps.LatLng(37.499717, 127.032378);
const apgujeong = new naver.maps.LatLng(37.525708, 127.02885);
const jeju = new naver.maps.LatLng(33.433223, 126.750818);
/* 블루보틀 매장들의 경,위도들 ------------------------------------------- */

const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.551048, 126.988012),
    zoom: 14,
    logoControl: false,
    mapDataControl: false,
    scaleControl: false,
}); //중심으로 하는 지도(남산타워로...만만하니깐)
/* 첫 화면에서 기준이 되는 경,위도 ---------------------------------------- */

$(function () {
    const imageName = [
        "location_blue1", "location_blue2", "location_blue3", "location_blue4", "location_blue5",
        "location_blue6", "location_blue7", "location_blue8", "location_blue9", "location_blue10"
    ]//imageName_Array
    $(".hj_photo p.button button").click(function () {
        let btnNum = $(this).attr("data-num")
        if (btnNum == imageName.indexOf(imageName[btnNum])) {
            $(this).parent().parent().children("figure").children("img").attr("src", "./img/location/" + imageName[btnNum] + ".jpg");
        }//if_img나오게하기!
        const descNum = locationDescArr.findIndex(v => {
            return (v.num === btnNum) && v.num
        })//descNum
        if (btnNum == descNum) {
            $(this).parent().siblings('figure').children('figcaption').children('p').text(window.locationDescArr[descNum].desc)
        }//if_img 변경되면서 desc까지 변경되게 하기!
    })//click_event
    /* -------------------------------- img 깨지는거 none으로 만들고 --> click시 block으로 변경해줌 
    button을 click하면 해당 location으로 사진이 계속 변경되게 해줌 ----------------------------- 
    ------------------------------------------------ 사진변경되면서 같이 세부사항도 변경시키게 해줌 */
}); //document.ready(jQuery)

document.querySelectorAll(".hj_photo .button button").forEach(v => {
    v.addEventListener("click", e => {
        Array.from(e.target.parentElement.children).forEach(v => {
            if (v !== e.target) v.classList.remove("active");
        }); //forEach
        e.target.classList.add("active");
    }); //click_event
}); //forEach
/* button에 active-motion ------------------------------------------------ */

window.onload = () => {
    document.querySelector('div#map div div a img').style.opacity = '0'
}//onload
/* NAVER LOGO 지우기! ---------------------------------------------------- */

function panTo1() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon1 = yeoido;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon1);
} //function_panTo1
function panTo2() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon2 = myungdong;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon2);
} //function_panTo2
function panTo3() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon3 = gwangha;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon3);
} //function_panTo3
function panTo4() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon4 = samchung;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon4);
} //function_panTo4
function panTo5() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon5 = samchungHanok;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon5);
} //function_panTo5
function panTo6() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon6 = hannam;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon6);
} //function_panTo6
function panTo7() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon7 = sungsu;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon7);
} //function_panTo7
function panTo8() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon8 = yeoksam;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon8);
} //function_panTo8
function panTo9() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon9 = apgujeong;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon9);
} //function_panTo9
function panTo10() {
    // 이동할 위도 경도 위치를 생성합니다
    let moveLatLon10 = jeju;
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.panTo(moveLatLon10);
} //function_panTo10
/* button을 click하면 해당 marker로 움직이게끔 하게 해줌 ---------------------------------- */

let marker1ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 여의도 카페</h3>",
    "<p>서울 영등포구 여의대로 108 <br> 더현대서울점 5층 <br>",
    "운영시간 : 10 : 30 ~ 21 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker1ConStr

let handleMarker = () => {
    locationArr.forEach(v => {
        new naver.maps.Marker({
            position: { lat: v.lat, lng: v.lng },
            map: map,
            icon: {
                url: "./img/location/marker.png",
                size: new naver.maps.Size(22, 35),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(11, 35),
            },//icon
        })//Marker
    })//forEach
}//function_handleMarker

let marker1 = new naver.maps.Marker({
    position: { lat: 37.525817, lng: 126.928338 },
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    }, //icon
}); //marker1
/* marker표시 ------------------------------------------------------- */
let infoWin1 = new naver.maps.InfoWindow({
    content: marker1ConStr,
}); //infoWin1
naver.maps.Event.addListener(marker1, "click", (e) => {
    infoWin1.getMap() ? infoWin1.close() : infoWin1.open(map, marker1);
}); //addListener
/* marker클릭시 나타나는 info ----------------------------------------- */

/* marker1 -------------------------------------------------------------------------------------------------------------------- */
let marker2ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 명동 카페</h3>",
    "<p>서울특별시 중구 명동길 14 1층 <br>",
    "운영시간 : 08 : 00 ~ 21 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker2ConStr
let marker2 = new naver.maps.Marker({
    position: myungdong,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker2

let infoWin2 = new naver.maps.InfoWindow({
    content: marker2ConStr,
}); //infoWin2
naver.maps.Event.addListener(marker2, "click", (e) => {
    infoWin2.getMap() ? infoWin2.close() : infoWin2.open(map, marker2);
}); //addListener
/* marker2 -------------------------------------------------------------------------------------------------------------------- */
let marker3ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 광화문 카페</h3>",
    "<p>서울특별시 종로구 청계천로 11 <br>",
    "운영시간 : 10 : 30 ~ 21 : 00(주중) <br> 09 : 00 ~ 20 : 00(주말)",
    "</p>",
    "</div>",
].join(""); //marker3ConStr
let marker3 = new naver.maps.Marker({
    position: gwangha,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker3
let infoWin3 = new naver.maps.InfoWindow({
    content: marker3ConStr,
}); //infoWin3
naver.maps.Event.addListener(marker3, "click", (e) => {
    infoWin3.getMap() ? infoWin3.close() : infoWin3.open(map, marker3);
}); //addListener
/* marker3 -------------------------------------------------------------------------------------------------------------------- */
let marker4ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 삼청 카페</h3>",
    "<p>서울특별시 종로구 북촌로5길 76 <br>",
    "운영시간 : 09 : 00 ~ 20 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker4ConStr
let marker4 = new naver.maps.Marker({
    position: samchung,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker4
let infoWin4 = new naver.maps.InfoWindow({
    content: marker4ConStr,
}); //infoWin4
naver.maps.Event.addListener(marker4, "click", (e) => {
    infoWin4.getMap() ? infoWin4.close() : infoWin4.open(map, marker4);
}); //addListener
/* marker4 -------------------------------------------------------------------------------------------------------------------- */
let marker5ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 삼청 한옥</h3>",
    "<p>서울특별시 종로구 삼청로2길 40-3 <br>",
    "운영시간 : 12 : 00 ~ 20 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker5ConStr
let marker5 = new naver.maps.Marker({
    position: samchungHanok,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker5
let infoWin5 = new naver.maps.InfoWindow({
    content: marker5ConStr,
}); //infoWin5
naver.maps.Event.addListener(marker5, "click", (e) => {
    infoWin5.getMap() ? infoWin5.close() : infoWin5.open(map, marker5);
}); //addListener
/* marker5 -------------------------------------------------------------------------------------------------------------------- */
let marker6ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 한남 카페</h3>",
    "<p>서울특별시 용산구 한남대로 91 <br>",
    "운영시간 : 09 : 00 ~ 20 : 00(주중) <br> 08 : 00 ~ 20 : 00(주말)",
    "</p>",
    "</div>",
].join(""); //marker6ConStr
let marker6 = new naver.maps.Marker({
    position: hannam,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker6
let infoWin6 = new naver.maps.InfoWindow({
    content: marker6ConStr,
}); //infoWin6
naver.maps.Event.addListener(marker6, "click", (e) => {
    infoWin6.getMap() ? infoWin6.close() : infoWin6.open(map, marker6);
}); //addListener
/* marker6 -------------------------------------------------------------------------------------------------------------------- */
let marker7ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 성수 카페</h3>",
    "<p>서울특별시 성동구 아차산로 7 <br>",
    "운영시간 : 08 : 00 ~ 20 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker7ConStr
let marker7 = new naver.maps.Marker({
    position: sungsu,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker7
let infoWin7 = new naver.maps.InfoWindow({
    content: marker7ConStr,
}); //infoWin7
naver.maps.Event.addListener(marker7, "click", (e) => {
    infoWin7.getMap() ? infoWin7.close() : infoWin7.open(map, marker7);
}); //addListener
/* marker7 -------------------------------------------------------------------------------------------------------------------- */
let marker8ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 역삼 카페</h3>",
    "<p>서울특별시 강남구 테헤란로 129 <br> 강남N타워 <br>",
    "운영시간 : 08 : 00 ~ 20 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker8ConStr
let marker8 = new naver.maps.Marker({
    position: yeoksam,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker8
let infoWin8 = new naver.maps.InfoWindow({
    content: marker8ConStr,
}); //infoWin8
naver.maps.Event.addListener(marker8, "click", (e) => {
    infoWin8.getMap() ? infoWin8.close() : infoWin8.open(map, marker8);
}); //addListener
/* marker8 -------------------------------------------------------------------------------------------------------------------- */
let marker9ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 압구정 카페</h3>",
    "<p>서울특별시 강남구 논현로 854 <br>",
    "운영시간 : 08 : 00 ~ 20 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker9ConStr
let marker9 = new naver.maps.Marker({
    position: apgujeong,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker9
let infoWin9 = new naver.maps.InfoWindow({
    content: marker9ConStr,
}); //infoWin9
naver.maps.Event.addListener(marker9, "click", (e) => {
    infoWin9.getMap() ? infoWin9.close() : infoWin9.open(map, marker9);
}); //addListener
/* marker9 -------------------------------------------------------------------------------------------------------------------- */
let marker10ConStr = [
    '<div class="hj_inner">',
    "<h3>블루보틀 제주 카페</h3>",
    "<p>제주특별자치도 제주시 구좌읍 번영로 2133-30 <br>",
    "운영시간 : 09 : 00 ~ 19 : 00 <br>",
    "</p>",
    "</div>",
].join(""); //marker10ConStr
let marker10 = new naver.maps.Marker({
    position: jeju,
    map: map,
    icon: {
        url: "./img/location/marker.png",
        size: new naver.maps.Size(22, 35),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(11, 35),
    },
}); //marker10
let infoWin10 = new naver.maps.InfoWindow({
    content: marker10ConStr,
}); //infoWin10
naver.maps.Event.addListener(marker10, "click", (e) => {
    infoWin10.getMap() ? infoWin10.close() : infoWin10.open(map, marker10);
}); //addListener
  /* marker10 -------------------------------------------------------------------------------------------------------------------- */