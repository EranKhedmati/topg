// When form submit go to page
const form = document.getElementById("form");

const videoUrl = "https://youtu.be/n66JcJa4wOM";

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.location = videoUrl;
})