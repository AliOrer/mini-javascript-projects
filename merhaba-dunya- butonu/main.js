
let button = getElementById('helloBtn'); //htmldeki butonu buluyoruz

let output = getElementById('output'); //yazının gösterileceği p etiketini buluyoruz

button.addEventListener('click', function(){ //butona tıklanınca ne yapacağını söylüyoruz
  output.textContent = "merhaba dünya!";
});  //p etiketinin içine textContent ile yeni metini ekliyoruz