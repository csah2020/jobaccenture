const header=document.querySelector("header");
const banner=document.querySelector(".banner");

const bannerOptions={
    rootMargin:"-350px 0px 0px 0px"
};
const bannerObserver=new IntersectionObserver(function(
    entries,
    bannerObserver
    ){
       entries.forEach(entry=>{
           if(!entry.isIntersecting){
               header.classList.add("navigation-scrolled");
           }
           else{
            header.classList.remove("navigation-scrolled");
           }
       }) ;
    },bannerOptions);

    bannerObserver.observe(banner);

    let myContactForm=document.querySelector('form');
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
        document.getElementById("response").innerHTML="Thank you "+ formData.get('name')  + " for Contacting <i>The Clovis Group!<i>"
        document.getElementById("response").innerHTML+= "<br>We greatly appreciate that. <br>You will hear from us soon!"
        document.getElementById("form").reset();
        setTimeout(responseReset,10000);
    })      
    
    });
    
    
        
    function responseReset(event) {
        const res=document.getElementById("response");
        res.textContent = "";
      }