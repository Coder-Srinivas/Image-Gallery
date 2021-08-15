const url = '/Image-Gallery/data.json';

const main = document.getElementById("main");
fetch(url).then(response => response.json()).then(data => displayImages(data));

const displayImages = (data) => {
    data.forEach((element) => {
        // Creating a block
        const div = document.createElement("div");
        div.classList.add("image-block");
    
        // Creating an image for the block
        const image = document.createElement("img");
        image.src = element.image;
        image.classList.add("image");
    
        // Creating a title for the block
        const title = document.createElement("div");
        title.innerHTML = element.title;
        title.classList.add("title");

        // Appending it to the div
        div.appendChild(image);
        div.appendChild(title);
    
        // Appending to the main div
        main.appendChild(div);
    })
}
