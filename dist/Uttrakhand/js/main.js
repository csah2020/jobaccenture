/*const subscribeNewsletterFunc=()=>{
    let emailAddress=document.getElementById("emailAddress").value;
    let isValid=true;


    if(emailAddress==""){
        document.getElementById("emailAddressErrorMessage").firstChild.nodeValue="Email address required.";
        isValid=false;
    }
    else{
        document.getElementById("emailAddressErrorMessage").firstChild.nodeValue="";
    }

    if(isValid){
        document.getElementById("newsletterForm").submit();
    }    
};

window.onload=()=>{
    document.getElementById("subscribeNewsletterBtn").onclick=subscribeNewsletterFunc;
    document.getElementById("emailAddress").focus();
    
};*/



$(function(){$('#nav_tier').slicknav({label:"",prependTo:"#mobile_nav_tier"})});