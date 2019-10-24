const url2 ='https://jsonplaceholder.typicode.com/todos/1'

async function wait() {
   await new Promise(resolve => setTimeout(resolve, 4000));

   return 10;
 }

 function f() {
      wait().then((x) => {
         console.log(x);
      })
 }
 f();
