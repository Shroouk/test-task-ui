window.onload = function() {
   

    var title = document.querySelector("#title");
    var question = document.querySelector("#question");

    var ans0_txt = document.querySelector("#ans0-txt");
    var ans1_txt = document.querySelector("#ans1-txt");
    var ans2_txt = document.querySelector("#ans2-txt");
    var ans3_txt = document.querySelector("#ans3-txt");

    var ans_0 = document.querySelector("#ans-0");
    var ans_1 = document.querySelector("#ans-1");
    var ans_2 = document.querySelector("#ans-2");
    var ans_3 = document.querySelector("#ans-3");


    var right_0 = document.querySelector("#right-0");
    var right_1 = document.querySelector("#right-1");
    var right_2 = document.querySelector("#right-2");
    var right_3 = document.querySelector("#right-3");

    var wrong_0 = document.querySelector("#wrong-0");
    var wrong_1 = document.querySelector("#wrong-1");
    var wrong_2 = document.querySelector("#wrong-2");
    var wrong_3 = document.querySelector("#wrong-3");


    var submit_wrapper = document.querySelector("#submit-wrapper");
    var try_wrapper = document.querySelector("#try-wrapper");
    var know_wrapper = document.querySelector("#know-wrapper");
    var more_wrapper =document.querySelector("#more-wrapper");
    var reason_wrapper = document.querySelector("#reason-wrapper");


    var submit_btn = document.querySelector("#submit-button");
    var next_btn =document.querySelector("#next-btn");
    var prev_btn = document.querySelector("#prev-btn");
    var reason_btn = document.querySelector("#reason-btn");

    var heading = document.querySelector("#heading");

    var ansArr_txt = [ans0_txt, ans1_txt, ans2_txt, ans3_txt];
    var ansArr = [ans_0, ans_1, ans_2, ans_3];
    var rightArr = [right_0, right_1, right_2, right_3];
    var wrongArr = [wrong_0, wrong_1, wrong_2, wrong_3];

   
    var quiz_results =document.querySelector("#quiz-results");
    var quiz_results_msg = document.querySelector("#quiz-results-message");
    var more_btn = document.querySelector("#more-btn");


    var progressbar = document.querySelector("#progressbar");


    


    var questionsArr = [];
    var questiondata = {};
    var count = localStorage.getItem("question-num");
    var ansCount = 0 ;

    
   
    var totalQuestions = 0;
    var currentQuestion = 0;
    


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
      
      initData(data);
     // localStorage.setItem("q-data", data);
     // console.log(localStorage.getItem("q-data"))
  })
  .catch(error => {
      console.log(error)
  });





  
  function initData(data){

    questionsArr = data;
    questiondata = questionsArr[count];

    totalQuestions= data.length;
    currentQuestion = +count+1;

    
    progressbar.style.width = (100 * currentQuestion / totalQuestions) + "%";

    title.innerHTML = data[count].title;
    question.innerHTML = data[count].question;

     ansArr_txt.forEach((ans,i)=>{
         ans.innerHTML = data[count].ans[i]
        
    }) 

  

       
if(count==0){
  prev_btn.disabled = true
}else{
  prev_btn.disabled = false
}

if(count < data.length-1){
  next_btn.disabled = false
}else{
  next_btn.disabled = true
}

   
  

    ansArr.forEach((ans,i)=>{
      ans.checked = false
      
    }
    )

    rightArr.forEach((right,i)=>{
      right.style.display = "none"
      
    }
    )

    wrongArr.forEach((wrong,i)=>{
      wrong.style.display = "none"
      
    }
    )

    
    try_wrapper.style.display= "none";
    know_wrapper.style.display= "none";

    quiz_results.style.display = "none";
    more_wrapper.style.display = "none";
    reason_wrapper.style.display="none";

    submit_wrapper.style.display= "inline-block";

  }


  
   









  submit_btn.addEventListener('click',()=>{
    ansCount = ansCount+1; 
    let answer = "";
  
  
    ansArr.forEach((ans,i)=>{
  
      if(ans.checked){
  
       
   
        answer = ansArr_txt[i].innerHTML;
  
  
        if(answer == questiondata.correct && ansCount < 3){
          console.log("done");
          rightArr[i].style.display = "inline-block"
         // setTimeout(()=>{rightArr[i].style.display = "none";},1000)
         reason_wrapper.style.display="flex";
         submit_wrapper.style.display= "none";

  
  
  
  
         
        }else if(answer != questiondata.correct && ansCount == 2){
          console.log(ansCount,"not");
          wrongArr[i].style.display = "inline-block";
          
          know_wrapper.style.display= "inline-block";
          submit_wrapper.style.display= "none";

          
        }else if(answer != questiondata.correct && ansCount < 3){
          console.log(ansCount,"not");
          wrongArr[i].style.display = "inline-block";
          try_wrapper.style.display= "inline-block";
          submit_wrapper.style.display= "none";
      
  
  
          
        }
      }else{
       
        console.log(ans.checked)
      }
      
    })
  
   
    console.log(ansCount)
  
  })



  try_wrapper.addEventListener('click',function(){
    submit_wrapper.style.display= "inline-block";
    try_wrapper.style.display= "none";
  })



   know_wrapper.addEventListener('click',function(){
    know_wrapper.style.display="none";
    submit_wrapper.style.display= "none";
    try_wrapper.style.display= "none";

    quiz_results.style.display = "flex";
    quiz_results_msg.innerHTML = questiondata.correct;
  })
 

  more_btn.addEventListener('click',function(){
    
    more_wrapper.style.display = "flex";
    quiz_results.style.display = "none";
    heading.innerHTML = "مزيد"
    document.getElementById("more-message").innerHTML = questiondata.more;
  })


  reason_btn.addEventListener('click',function(){

    reason_wrapper.style.display = "none";
    more_wrapper.style.display = "flex";
    quiz_results.style.display = "none";
    heading.innerHTML = "سبب الاجابة"
    document.getElementById("more-message").innerHTML = questiondata.more;
  })



  next_btn.addEventListener('click',nextQuestionFunc);
  prev_btn.addEventListener('click',prevQuestionFunc);





function nextQuestionFunc(){
  ansCount =0;
 
  count++;

  currentQuestion = count;
  
  progressbar.style.width = (100 * currentQuestion / totalQuestions) + "%";
  localStorage.setItem("question-num", count);
  initData(questionsArr);
}

function prevQuestionFunc(){
 
  ansCount=0;
  
  count--;
  localStorage.setItem("question-num", count);
  initData(questionsArr);
}







}







