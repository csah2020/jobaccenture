const hamburger=document.querySelector(".hamburger");
const navList=document.querySelector(".nav__list");

hamburger.addEventListener('click',()=>{
    navList.classList.toggle('show');
   });

   document.getElementById("bodySnack").onload = function() {snackFunc()};

   function snackFunc() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
   }


try{  
function initializeTypewriterEffect(){
    let htmlElement=document.querySelector('.txt-type');
    let texts=JSON.parse(htmlElement.getAttribute('data-words'));
    new TypewriterEffect(htmlElement,texts);
    
};
document.addEventListener('DOMContentLoaded',initializeTypewriterEffect);  

class TypewriterEffect{
        constructor(htmlElement,texts){
            this.htmlElement=htmlElement;
            this.texts=texts;
            this.count=0;
            this.index=0;
            this.currentText="";
            this.letter="";
            this.cursorErasingLetter="";
            this.typingLetterDelay=300;
            this.erasingDelay=20;
            this.type();
        }
        

        type(){

            if(this.cursorErasingLetter ) {

                this.currentText= this.texts[this.count].slice(0,this.currentText.length-1);
                this.htmlElement.innerHTML=`<span class="newWord">${this.currentText}</span>`;
                
                setTimeout(()=>this.type(),this.typingLetterDelay-this.erasingDelay);
            }
            else{

            this.currentText+= this.texts[this.count].charAt(this.index);
            this.htmlElement.innerHTML=`<span class="newWord"> ${this.currentText}</span>`;
            this.index++;

            setTimeout(()=>this.type(),this.typingLetterDelay);
            }
            if(this.currentText===this.texts[this.count])  {
                this.cursorErasingLetter=true; 
                        
            } 
        
            else if( this.currentText==="" ){
                this.cursorErasingLetter=false;
                this.count++;            
                this.index=0; 
                if(this.count===this.texts.length ) {   
                    this.count=0;
                }
            } 
        }
    }// end of initializeTypewriterEffect()
    
 }// end of try

catch(err){
    console.log(err);
}








// let myContactForm=document.querySelector('#reach form');
let myContactForm=document.querySelector('#reach form');
myContactForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData=new FormData(myContactForm);
    
    fetch(myContactForm.getAttribute('action'),{
        method:'POST',
        headers:{
            'Accept':'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body:new URLSearchParams(formData).toString()
    })
    .then(function() {
        document.getElementById("response").innerHTML="Thank you "+ formData.get('name')  + " for Contacting me!"
        document.getElementById("response").innerHTML+= "<br>I greatly appreciate that. <br>You will hear from me soon!"
        document.getElementById("form").reset();
        setTimeout(responseReset,10000);
    })      
    
    });
    
    
        
    function responseReset(event) {
        const res=document.getElementById("response");
        res.textContent = "";
      }
    
   
    

