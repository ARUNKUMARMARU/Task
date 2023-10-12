let randomLink = document.getElementById("randomLink")
let img = document.getElementsByClassName("card-img-top")

randomLink.addEventListener("click", async(e)=>{
    e.preventDefault()
    let response=await fetch("https://random.dog/woof.json");
    let data= await response.json();
    
    let link = data.url

    console.log(img)
    // randomLink.appendChild(link);
    img[0].src=link

})

