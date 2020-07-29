const link=document.querySelector('a');

link.textContent='Become true';
link.href='https://gorod.dp.ua';

const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.textContent='we hope you enjoyed ride';

//for(let i=1; i<10; i++){
    //const p =document.createElement('p');
    //p.textContent = i+' lorem ipsum...';
  //  sect.appendChild(p);
//}

const linkPara = document.querySelector('p');
sect.appendChild(linkPara.cloneNode(true));
//linkPara.parentNode.removeChild(linkPara);
linkPara.remove();
para.style.color="white";
para.style.backgroundColor = "black";
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('formatted');



const clock=document.querySelector('.clock');
const options={
    weekday: "long", year:"numeric", month:"short",
    day: "numeric", hour:"2-digit", minute:"2-digit"
};

const showclock=()=>clock.innerText = (new Date()).toLocaleTimeString("uk", options);
setInterval(showclock, 1000);
