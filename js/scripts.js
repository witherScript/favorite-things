


function displayUserInput(arrayOfItems){

  const inputDiv = document.querySelector('div.container');
  const listDiv = document.querySelector('div#ul-div');
  
  inputDiv.classList.add('hidden');
  

  const listOfItems = document.createElement('ul');

  arrayOfItems.forEach(function(item){

    const li = document.createElement('li');
    li.append(item);
    listOfItems.append(li);
  });


  document.body.append(listOfItems);

  listDiv.prepend(listOfItems);
  listDiv.classList.remove('hidden');

}

function resetInput(){
  const form = document.querySelector('form');
  form.reset();
  document.querySelector('div.container').classList.remove('hidden');
  document.querySelector('div#ul-div').classList.add('hidden');


}


function handleUserInput(event){
  event.preventDefault();
  const userInput = document.querySelector('textarea#things-list').value;  //this will be a long string, separated by commas (hopefully)

  let userInputArr =  userInput.split(','); //"cats, dogs, pigs" -> ["cats", "dogs", "pigs"]

  if (userInput.length>0){

    if(userInputArr.length === 0){ // "cats dogs pigs" ["cats", "dogs", "pigs"]


      userInputArr = userInput.split(' ');
    }
  
    displayUserInput(userInputArr);
    document.querySelector('div.error').innerText='';


  }
  else {

    const error = document.createElement('h1');
    error.setAttribute('style', 'color:red');
    error.append('ENTER SOMETHING YA BLOKE!');
    document.querySelector('div.error').prepend(error);

  }





}

window.addEventListener('load', function(){

  const form = document.querySelector('form');
  const resetBtn = document.querySelector('button#clear-list');

  resetBtn.addEventListener('click', resetInput);

  form.addEventListener('submit', handleUserInput);
});



/*
TODO:
- A function that handles user input
  stores each separate item in an array (Business)

- 




*/