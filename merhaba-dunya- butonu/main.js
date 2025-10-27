
let button = getElementById('helloBtn'); //htmldeki butonu buluyoruz

let output = getElementById('output'); //yazının gösterileceği p etiketini buluyoruz

let messages = ["Merhaba Dünya!", "Nasılsın?", "Hoş Geldin!"]; //gösterilecek metinleri array içine topluyoruz

let index = 0; //hangi sırada olduğumuzu tutmak için bir sayaç eğkliyoruz



button.addEventListener('click', function(){ //paragrafın içine  dizideki yazıyı koyuyoruz
  output.textContent = messages[index];
  
  index = index +1; //sonraki yazıya geçmek için indexi 1 artırıyoruz
  
  if(index == messages.length) { //eger sona geldiysek basa dönderiyoruz
    index = 0;
  }
});  
