/* 
    1. 
        Use fetch() to load data from photos.json
        
        Display the photos inside of a FlexBox container
            The src will be https://picsum.photos/id/${photo.id}/100/100
            The alt text will be the photo.title from the json

        Use Flexbox to display the photos in a Row 
            The Row should Wrap to a new line on overflow
            Give each photo a white 0.1rem solid border
            Rounded corners at 0.7rem border-radius
            Each photo should be at least 1rem away from the photos around it
*/


async function getPhotos() {
    let response = await fetch("photos.json")
    let photos = await response.json()
    return photos
}

function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join('')
    console.log(myPhotosHtml)
    
    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotos().then(photos => {    
    document.body.innerHTML = `<div class="my-gallery">
        <img style="display: none;" class="my-photo" id="my-selected-photo" src="https://picsum.photos/id/1/200/200" />
        ${getPhotosHtml(photos)}
    </div>`    
    
    let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
    myPhotoImgs.forEach(photoImg => {
        photoImg.addEventListener("click", event => {
            let selectedPhotoSrc = `${photoImg.src.substr(0, photoImg.src.length - 7)}200/200`

            let selectedPhoto = document.getElementById("my-selected-photo")
            selectedPhoto.src = selectedPhotoSrc
            selectedPhoto.style.display = "inline"
        })
    })
})