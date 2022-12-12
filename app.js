window.onload = function() {
   

  
    

    var questionsArr = [];
    var questiondata = {};
    var count = 0;
    var ansCount = 0 ;

    
    


  fetch("./data.json")
  .then(response => {
      if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
  })

  .then(data => {
   //   console.log(data);
    //  let x = data.map(JSON.parse);
      
      init(data);
     // localStorage.setItem("q-data", data);
     // console.log(localStorage.getItem("q-data"))
  })
  .catch(error => {
      console.log(error)
  });





  function createElm(title,question,i){
    let content = `     <div class="q-div-wrapper">

                          <div class="block-2 img-block">
                              <img class="card-img" src="./imgs/checked.svg"/>
                          </div>
                          <div class="block-2 q-block">
                              
                              <div class="content-wrapper">
                              <p class="title">`+title+`</p>
                              <p class="question">`+question+`</p>
                              </div>
                              
                              <div class="read-wrapper" ><a href="./question.html" class="read-more"> <button class="btn q-btn" id="`+i+`">اقرأ المزيد</button> </a></div>
                              
                          </div>
                        
                      </div>`;






let div = document.createElement('div');
        div.innerHTML = content;
        document.querySelector('.q-container').appendChild(div);

  }




  function init(data){

    questionsArr = data;
    questiondata = questionsArr[count]
  

   
    for(let i=0; i<questionsArr.length; i++){
      /*  let qDiv = document.createElement('div');
   
        qDiv.className = 'q-div-wrapper';
        document.querySelector('.q-container').appendChild(qDiv);

       
       let innerDiv = document.createElement('div');
        innerDiv.className = 'block-2 img-block';

        let cardimg = document.createElement('img');
        cardimg.className = 'card-img';
        cardimg.src = './imgs/checked.svg'
        innerDiv.appendChild(cardimg);

       
        
        let innerDiv2 = document.createElement('div');
         innerDiv2.className = 'block-2 q-block';

        let question = document.createElement('p');
         question.className = 'question';

         let title = document.createElement('p');
         title.className = 'title';


         let btn = document.createElement('button');
         btn.className = 'btn q-btn';
         btn.innerHTML = 'اقرأ المزيد';
  

       
         title.innerHTML=data[i].title;
         question.innerHTML=data[i].question;
         innerDiv2.appendChild(title);
         innerDiv2.appendChild(question);
         innerDiv2.appendChild(btn);

        qDiv.appendChild(innerDiv);
        qDiv.appendChild(innerDiv2); */


        createElm(data[i].title, data[i].question,i)

     //   document.getElementById(id).innerHTML=data[i].title;

     document.getElementById(i).addEventListener('click',function(){
      
      localStorage.setItem("question-num", i);
     })
            }



            

  }


















  /* next_btn.addEventListener('click',nextQuestionFunc);
  prev_btn.addEventListener('click',prevQuestionFunc);





function nextQuestionFunc(){
  ansCount =0;
  count++;
  init(questionsArr);
}

function prevQuestionFunc(){
  count--;
  ansCount=0;
  init(questionsArr);
} */

















}