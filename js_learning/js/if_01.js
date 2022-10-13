  function check(){
    let element = document.getElementById("name").value;
    let value =document.getElementById("text").value;
    if(element==""){
        alert("名前が空白です。")
         return false;
    }else if(value==""){
        alert("問い合わせ内容が空白です。")
        return false;
    }else{
        alert("投稿しました。")
        return false;
    }
   
  }

