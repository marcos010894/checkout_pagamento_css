const proximo = () => {
  document.querySelector(".container_for_mobile").style.display = "block";
  document.querySelector(".container_img").style.display = "none";
};


document.getElementById('proximo').addEventListener("click", function (){
   let btn =  document.getElementById('proximo')
   btn.innerHTML = "Loading...";
   proximo()
})
