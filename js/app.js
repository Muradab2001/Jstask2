if(confirm('qebul edirsen') === true) {
    alert('xos geldin')
}
else{
    alert('alinmir')
    document.body.style.display = 'none'
}
var age=prompt("yasinizi daxil edin");
if(age>=18){
alert("xos geldiniz");
}
else{
    alert("get boyu gel");
    document.body.style.display='none';
}
function mode(){
    var body=document.body;
    var icon=document.getElementById('icon');
    if(body.style.backgroundColor==='black'){
      body.style.backgroundColor='white';
      icon.className='fa-solid fa-circle-half-stroke';
      body.style.color='black';
    }
    else{
        body.style.backgroundColor='black';
        icon.className='fa-solid fa-cloud-sun';
      body.style.color='white';

    }
}
function addgroup(){
    var group=document.getElementById('input').value;
    var span =document.getElementById('span');
    span.innerHTML=group;
    var test =group.toString().slice(1,4);
    if(test>=100 && test<200){
        span.style.color='yellow';
    }
    else if(test>=200&&test<300){
        span.style.color='red';
    }
    else if(test>=300&&test<400){
        span.style.color='green';
    }
    else{
        span.innerHTML='duzgun daxil et'
    }
}
