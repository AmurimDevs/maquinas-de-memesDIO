function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function(){
        const reader = new FileReader()

        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result

            changeMemePicture(uploadImage)

 //           document.querySelector("#display-image").style
 //           .backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObject = [
        {
            "name": "felipão",
            "path": "pictures/felipão.jpeg"
        },
        {
            "name": "chloe",
            "path": "pictures/chloe.png"
        },
        {
            "name": "naruto",
            "path": "pictures/naruto.jpeg"
        },
    ]
    return memesObject
}

async function createGallety(imageList){
    const memeSelector = document.querySelector("#memes-list")   

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}

async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallety(memesImageList)
    await changeMemePicture(memesImageList[0].path)
}

main()
