$(function () {
    const findPhoto = $('.hj_cafes_photo')
    const findPhotoImg = $('.hj_cafes_photo img')
    const findPhotoSvg = $('.hj_cafes_photo svg')
    const cafeImageArr = [
        "location_blue1", "location_blue2", "location_blue3", "location_blue4", "location_blue5",
        "location_blue6", "location_blue7", "location_blue8", "location_blue9", "location_blue10"
    ]//cafeImageArr
    $('.hj_ripples').ripples({
        resolution: 700,
        dropRadius: 19,
        perturbance: 0.05,
    }) //ripples
    $('.hj_ripples canvas').css({ 'border-radius': '50%' })
    findPhotoImg.css({ 'display': 'none' })
    $('.hj_cafes_area a').mouseenter(function () {
        findPhoto.css({ 'z-index': 3 })
        findPhotoSvg.css({ 'display': 'none' })
        findPhotoImg.css({ 'display': 'block' })
        let hj_anchorData = parseInt($(this).attr('data-num'))
        if (hj_anchorData === cafeImageArr.indexOf(cafeImageArr[hj_anchorData])) {
            findPhotoImg.attr("src", "./img/location/" + cafeImageArr[hj_anchorData] + ".jpg");
        }//if
    })//mouseenter
    $('.hj_cafes_area').mouseleave(function () {
        findPhoto.css({ 'z-index': 1 })
        findPhotoSvg.css({ 'display': 'block' })
        findPhotoImg.css({ 'display': 'none' })
    })//mouseleave

    $('.hj_cafes_area a').click(function () {
        $(this).attr('href', './cafes.php' + '?' + $(this).attr('data-num'))
    })//click_event
    /* anchor click시에 href에 data-num추가해서 cafes.php URL로 이동시킴 */

    for (i = 0; i < 10; i++) {
        $(`.hj_cafes_area a:nth-child(${i})`).children('img.hj_logo').css({ 'animation-delay': `${i * 3}s` })
    }//for
    $('.hj_cafes_area a img.hj_logo').mouseenter(function () {
        $(this).css({ 'animation': 'none' })
    })//mouseenter
    $('.hj_cafes_area a img.hj_logo').mouseleave(function () {
        $(this).css({ 'animation': 'chScale 7s alternate infinite' })
    })//mouseenter

    $('.hj_cafes_area a').bind('touchstart', function (e) {
        e.preventDefault();
        findPhoto.css({ 'z-index': 3 })
        findPhotoSvg.css({ 'display': 'none' })
        findPhotoImg.css({ 'display': 'block' })
        let hj_anchorData = parseInt($(this).attr('data-num'))
        if (hj_anchorData === cafeImageArr.indexOf(cafeImageArr[hj_anchorData])) {
            findPhotoImg.attr("src", "./img/location/" + cafeImageArr[hj_anchorData] + ".jpg");
        }//if
    })//touchmove
    /* icon mouseenter시에 animation 없앴다가 --> mouseleave시에 animation 다시 살리기! */
    $(window).resize(function () {
        if ($(window).innerWidth() < 500) {
            $('.hj_cafes_area a span').css({ 'opacity': '1' })
        } else {
            $('.hj_cafes_area a span').addClass('hover')
            $('.hj_cafes_area a span').css({ 'opacity': '0' })
        }//if-else
    })//resize_event

})//document.ready



