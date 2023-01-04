$(function () {
    const cafeImageArr = [
        "location_blue1", "location_blue2", "location_blue3", "location_blue4", "location_blue5",
        "location_blue6", "location_blue7", "location_blue8", "location_blue9", "location_blue10"
    ]//cafeImageArr
    $('.hj_cafes_area a').mouseenter(function () {
        let anchorData = parseInt($(this).attr('data-num'))
        if (anchorData === cafeImageArr.indexOf(cafeImageArr[anchorData])) {
            $('.hj_cafes_photo img').attr("src", "./img/location/" + cafeImageArr[anchorData] + ".jpg");
        }//if
    })//mouseenter
})//document.ready