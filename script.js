const parent = document.querySelector(".container");
const cards = document.querySelectorAll('.row > div[data-category]');
const menu = document.querySelectorAll(".d-flex button");
const search = document.querySelector('.mb-4 input');


const Pasta = [];
const Soup = [];
const Beef = [];
const Salad = [];
const Dessert = [];

for(let i = 0; i < cards.length; i++){
    switch(cards[i].dataset.category){
        case "Pasta":
        Pasta.push(cards[i]);
        break;
        case "Soup":
        Soup.push(cards[i]);
        break;
        case "Beef":
        Beef.push(cards[i]);
        break;
        case "Salad":
        Salad.push(cards[i]);
        break;
        case "Dessert":
         Dessert.push(cards[i]);
         break;                   
    }
}



search.oninput = () => {

     cards.forEach(card => card.style.display = "none");

     menu.forEach(item => {
        item.style = `background-color: white; color: #146C43FF;`;
        if(item.innerHTML.toLocaleLowerCase() == search.value.toLocaleLowerCase()){
            item.style = `background-color: #146C43FF; color: white;`;
        }
     })

   switch(search.value.toLocaleLowerCase()){
            case "All".toLocaleLowerCase():
            cards.forEach(card => card.style.display = 'block');
            break;
            case "Pasta".toLocaleLowerCase():
            Pasta.forEach(card => card.style.display = 'block');
            break;
            case "Soup".toLocaleLowerCase():
            Soup.forEach(card => card.style.display = 'block');
            break;
            case "Beef".toLocaleLowerCase():
            Beef.forEach(card => card.style.display = 'block');
            break;
            case "Salad".toLocaleLowerCase():
            Salad.forEach(card => card.style.display = 'block');
            break;
            case "Dessert".toLocaleLowerCase():
            Dessert.forEach(card => card.style.display = 'block');
            break;                        
        }


    }



menu.forEach(item => {

    if(item.ariaChecked == "true"){
         cards.forEach(card => card.style.display = 'block');
    }
 
    item.onclick = () => {
        cards.forEach(card => card.style.display = "none");
       search.value = item.innerHTML;
        menu.forEach(btn => {
            btn.ariaChecked = 'false';
            btn.style = `   background-color: white; color: #146C43FF`;
        })
          
         
        
            item.ariaChecked = true;
            item.style.backgroundColor = '#146C43FF';
            item.style.color = 'white';
        
      

        switch(item.innerHTML.trim() ){
            case "All":
            cards.forEach(card => card.style.display = 'block');
            break;
            case "Pasta":
            Pasta.forEach(card => card.style.display = 'block');
            break;
            case "Soup":
            Soup.forEach(card => card.style.display = 'block');
            break;
            case "Beef":
            Beef.forEach(card => card.style.display = 'block');
            break;
            case "Salad":
            Salad.forEach(card => card.style.display = 'block');
            break;
            case "Dessert":
            Dessert.forEach(card => card.style.display = 'block');
            break;                        
        }
    }
})




