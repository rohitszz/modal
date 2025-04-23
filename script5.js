function openmodal(){
    const modal=document.querySelector('.modal');
    modal.style.scale='1';
}
function closemodal() {
    const modal = document.querySelector('.modal');
    modal.style.scale = '0';
}
document.addEventListener('click',function(e){
    const modal=document.querySelector('.modal');
    const wrapper=document.querySelector('.wrapper');
    const sb=document.querySelector('.first1');
    if(!modal.contains(e.target) && wrapper.contains(e.target) && !sb.contains(e.target)){
        closemodal();
    }
} );
