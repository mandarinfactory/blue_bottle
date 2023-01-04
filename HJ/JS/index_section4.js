$(function () {
    const cafeImageArr = [
        "location_blue1", "location_blue2", "location_blue3", "location_blue4", "location_blue5",
        "location_blue6", "location_blue7", "location_blue8", "location_blue9", "location_blue10"
    ]//cafeImageArr
    $('.hj_cafes_area a').mouseenter(function () {
        $('.hj_cafes_photo svg').css({'display':'none'})
        $('.hj_cafes_photo img').css({'display':'block'})
        let hj_anchorData = parseInt($(this).attr('data-num'))
        if (hj_anchorData === cafeImageArr.indexOf(cafeImageArr[hj_anchorData])) {
            $('.hj_cafes_photo img').attr("src", "./img/location/" + cafeImageArr[hj_anchorData] + ".jpg");
        }//if
    })//mouseenter
    $('.hj_cafes_area a').mouseleave(function () {
        $('.hj_cafes_photo img').css({'display':'none'})
        $('.hj_cafes_photo svg').css({'display':'block'})
    })//mouseleave

    let hj_clickAnchorData = $('.hj_cafes_area a').click(function () {
        $(this).attr('data-num')
    })//hj_anchorClick 
    if(hj_clickAnchorData){}
})//document.ready