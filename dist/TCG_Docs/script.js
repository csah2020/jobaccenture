const tabs=document.querySelectorAll("[data-tab-target]");
const tabContents=document.querySelectorAll("[data-tab-content]");
tabs.forEach(tab=>{tab.addEventListener("click", ()=>{
    const targetTab=document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent=>{
        tabContent.classList.remove('active')
    })
    targetTab.classList.add('active')
    tabs.forEach(tab=>{
      tab.classList.remove('active')
  })
  tab.classList.add('active')
})
})

let btn=document.querySelectorAll("button");

for(let i=0;i<btn.length;i++){

    btn[i].addEventListener("click",function(){
        this.classList.toggle("active");
        let answer=this.nextElementSibling;
        
        answer.style.maxHeight?0:answer.scrollHeight+"px";
     })
}

function termination(e, terminate) {
    let i, tabcontent, tablinks;
    tabcontent = document.querySelectorAll(".tabcontent");
    for ( i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.querySelectorAll(".tablinks");
   for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
    
    }
    document.getElementById(terminate).style.display = "block";
    e.currentTarget.className.toggle("active");
  }