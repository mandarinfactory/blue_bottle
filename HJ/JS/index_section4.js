const cafeImageArr = [
    "location_blue1", "location_blue2", "location_blue3", "location_blue4", "location_blue5",
    "location_blue6", "location_blue7", "location_blue8", "location_blue9", "location_blue10"
]//cafeImageArr

document.querySelector('.hj_cafes_area a').addEventListener('click', e => {
    e.preventDefault()
    let hjAnchorData = e.target.getAttribute('data-num')  
    console.log(hjAnchorData);   
})//hjAnchorData