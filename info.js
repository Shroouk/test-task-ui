window.onload = function() {
   


  

    var list = document.querySelector('.ul');

    var questionsArr = [];
    var questiondata = {};
    var count = localStorage.getItem("question-num");
    var ansCount = 0 ;

    var info_items = [];

  fetch("./data.json")
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
  })

  .then(data => {
     // console.log(data);
    //  let x = data.map(JSON.parse);
      
      init(data);
  })
  .catch(error => {
      console.log(error)
  });





  function init(data){

    questionsArr = data;
    questiondata = questionsArr[count]
  
   
    while (list.lastChild.id !== 'info-title') {
      list.removeChild(list.lastChild);
  }

   // console.log(list.children)

    document.querySelector(".info-title").innerHTML = data[count].infoTitle;

   

    for(let i=0; i<data[count].srcs.length; i++){
      
      let li = document.createElement("li");
      let DOM_img = document.createElement("img");
      DOM_img.src = data[count].srcs[i];
      li.className = "img-list ";
      li.appendChild(DOM_img);
      list.appendChild(li);
    } 



    info_items = Array.from(document.querySelectorAll(".img-list"));

    for(let i=0; i<info_items.length; i++){

    }

    info_items.forEach((elm)=>{
      elm.style.display = "none"
    })



   
    //animate();

    ansArr.forEach((ans,i)=>{
      ans.checked = false
      
    }
    )

  


  }






































//console.log( document.querySelector('ul').children)



info_items.forEach((elm,i)=>{
  
})


let show = 0;



 document.querySelector('#info-title').addEventListener('click', function(e) {
  

  animate(show)
  show++;

})

function animate(i){
 
  info_items[i].style.display = "inline-block";
}

}