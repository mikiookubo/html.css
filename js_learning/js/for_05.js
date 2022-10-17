const participant =[
    {name:'taro',age:15,address:'東京都千代田区'},
    {name:'hanako',age:18,address:'東京都杉並区'},
    {name:'john',age:25,address:'東京都渋谷区'},
    {name:'mac',age:30,address:'東京都新宿区'},
    {name:'post',age:40,address:'東京都足立区'},
    {name:'malone',age:28,address:'東京都品川区'},
    {name:'lil',age:34,address:'広島県広島市'},
    {name:'peep',age:33,address:'埼玉県大宮'},
    {name:'curt',age:29,address:'北海道札幌市'},
   ]
   
 
  
   function check(){
    let i = 0;
    participant.forEach((item)=>{
        i++;
        const participantList = document.getElementById("participantList");
        let tr =  document.createElement("tr");
        participantList.appendChild(tr);
        // console.log(item);
      
        const obj = Object.entries(item);  
        obj.splice(0,0,["num",i]);
        console.log(participant);
    
        // console.log(tr);
        // console.log(obj);
        obj.forEach((arr)=>{
            const td = document.createElement("td");
            console.log(td);
            td.textContent = arr[1] 
            //console.log(arr);
             tr.appendChild(td);
            // const btn = document.getElementById("btn");
        });
    });
    btn.style.display="none";
   };

   
 
   