document.getElementById("btn").addEventListener("click",getImage);

function getImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        var i =document.getElementById("image");
        i.innerHTML="";
        let img=document.createElement("img");
        img.src=data.message;
        i.appenchild(img);
    })
      .catch((err)=>{
          i.innerHTML=err;
      })
      }