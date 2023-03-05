console.log(1);
console.log(2);
// doSomething();
// setTimeout(doSomething);
setTimeout(doSomething,4000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
console.log(3);
console.log(4);

function doSomething(){
      console.log(5);
}

setTimeout(()=>console.log('Lettttttttttt'),4000);