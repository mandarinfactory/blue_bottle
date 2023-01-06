$(function () {
    const cafeImageArr = [
        "location_blue1", "location_blue2", "location_blue3", "location_blue4", "location_blue5",
        "location_blue6", "location_blue7", "location_blue8", "location_blue9", "location_blue10"
    ]//cafeImageArr
    $('.hj_cafes_photo img').css({ 'display': 'none' })
    $('.hj_cafes_area a').mouseenter(function () {
        $('.hj_cafes_photo svg').css({ 'display': 'none' })
        $('.hj_cafes_photo img').css({ 'display': 'block' })
        let hj_anchorData = parseInt($(this).attr('data-num'))
        if (hj_anchorData === cafeImageArr.indexOf(cafeImageArr[hj_anchorData])) {
            $('.hj_cafes_photo img').attr("src", "./img/location/" + cafeImageArr[hj_anchorData] + ".jpg");
        }//if
    })//mouseenter
    $('.hj_cafes_area').mouseleave(function () {
        $('.hj_cafes_photo svg').css({ 'display': 'block' })
        $('.hj_cafes_photo img').css({ 'display': 'none' })
    })//mouseleave

    $('.hj_cafes_area a').click(function () {
        const anchorData = $(this).attr('data-num')
        $(this).attr('href', './cafes.php' + '?' + anchorData)
    })//click_event
})//document.ready

