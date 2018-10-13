






let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function(){
  if (this.readyState==4 && this.status ==200) {
   let newObj = JSON.parse(this.responseText);
   document.getElementById ("card-title").innerHTML = newObj.text;

  }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();


