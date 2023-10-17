function getDog(){
    fetch("https://random.dog/woof.json")
    .then((res)=>res.json())
    .then((data)=>{
        displayImage(data.url)
    });
}

function displayImage(image){
    document.getElementById("image").src = image;
}