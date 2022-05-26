let menuBar=document.getElementById('menu-bar');
menuBar.addEventListener("click", openMenuBar);

let closeMenu =document.getElementById('closeMenu');
closeMenu.addEventListener("click",closeMenuBar);

function openMenuBar(){
    let navList= document.getElementById('navList');
    navList.style.marginRight="-100px";
}
function closeMenuBar(){
    let navList= document.getElementById('navList');
    navList.style.marginRight="-400px";
}

let openBlogMenu=document.getElementById('openBlogMenu');
openBlogMenu.addEventListener('click',openBlog );

function openBlog(){
    openBlogMenu.style.visibility='hidden';
    let blogToggle= document.getElementById('blogToggle').children;
    blogToggle[0].style.display="block";
    blogToggle[1].style.display="block";
    blogToggle[2].style.display="block";
    closeBlogMenu.style.visibility='visible';

}
let closeBlogMenu=document.getElementById('closeBlogMenu');
closeBlogMenu.addEventListener('click',closeBlog);

function closeBlog(){
    openBlogMenu.style.visibility='visible';
    let blogToggle= document.getElementById('blogToggle').children;
    blogToggle[0].style.display="none";
    blogToggle[1].style.display="none";
    blogToggle[2].style.display="none";
    closeBlogMenu.style.visibility='hidden';

}

//scroll event


window.addEventListener('scroll', scrollEvent)
function scrollEvent(){
    let midLeft=document.getElementById('mid-left').children;
   
    if(scrollY >167){
         let rBottomScrollEvent=document.getElementById('rBottomScrollEvent').children;
  rBottomScrollEvent[0].style.marginTop="0px";
  rBottomScrollEvent[1].style.marginTop="0px";
    }
    
   
}

//footer

//email submit

let esubmit= document.getElementById('esubmit');
esubmit.addEventListener('click',()=>{
    let email= document.getElementById('femail');
    alert(email.value+ "   Your Email has been submited!");
    email.value=" "; 
  
})

