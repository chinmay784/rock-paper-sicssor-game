
  let a=document.querySelectorAll('.img');
  a.forEach(element => {
     element.onclick =()=>{
        let rrr=(element.value);
        let val= computerget();

        document.getElementById('reasult').innerHTML=`${rrr} VS ${val}`;

        const vzvzv=getreasult(rrr,val);

        document.getElementById('get-reasult').innerHTML=`${vzvzv}`;
        showreasult(vzvzv,rrr,val);


        Endgame();
      }
  });
  const computerget=()=>{
      const given=['Rock','Papper','Sisccior'];
      let b=Math.floor(Math.random()*3);
      return given[b];
  }
  function showreasult(score,playerchoices,computerchoices){
      

    if(score==-1){       
    //  document.getElementById('two').play();
     document.getElementById('get-id').innerHTML="YOU LOSE";
    }
    else if(score==0){
     document.getElementById('three').play();
     document.getElementById('get-id').innerHTML="MATCH DRAW ";
     
    }
    else{       
      document.getElementById('one').play();
     document.getElementById('get-id').innerHTML="YOU WIN";
    }

  }
 const getreasult =(playerchoices,computerchoices)=>{
 let score;
 if(playerchoices==computerchoices){
     score=0;
 }else if(playerchoices=='Rock'&&computerchoices=='Sisccior'){
     score=1;
 }else if(playerchoices=='Papper'&&computerchoices=='Rock'){
     score=1;
 }else if(playerchoices=='Sicsor'&&computerchoices=='Papper'){
     score=1;
 }else{
     score=-1;
 }
   return score;
 }
  function Endgame(){
  document.getElementById('img2').value=string;
  }


const chintu=document.getElementById('img2');
chintu.addEventListener("click",(e)=>{
document.getElementById('four').play();
document.getElementById('reasult').innerHTML=" ";
document.getElementById('get-reasult').innerHTML=" ";
document.getElementById('get-id').innerHTML="";
});     