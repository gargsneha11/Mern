var btn=document.querySelector("button")

btn.addEventListener("click",handleClick)

function handleClick(){
    var image=document.getElementById("url")
    var title=document.getElementById("title")
    var rating=document.getElementById("rating")

   
    var carddiv=document.getElementById("cardDiv")
    carddiv.innerHTML += ` <div class="card">
   <img src="${image.value}" alt="avtar umage">
            <p>Movie: ${title.value}</p>
            <h3>Rating :${rating.value}</h3>
        </div>`
    
//   var formdiv=document.getElementById("formDiv")
//   formdiv.reset();
    image.value = "";
    title.value = "";
    rating.value ="";
}
    
        
