// lets just reference first
const clock = document.querySelector('.clock');
// now lets create the function and this function is going to print for us the time but on the basis of a second
const ticking = () =>{
  const now = new Date();
  // const TimeDifference = afterDate.getTime() - now.getTime();
  // console.log(new Date(TimeDifference));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
 const p = `<h1>IN CASE YOU FORGET TIME ITS:</h1>
 <p><span class="hours">${hours}h :</span> <span class="minutes">${minutes}min :</span> <span class="seconds">${seconds}sec </span></p>
 `
 
  clock.innerHTML= p;

}
// now how are we going to call this particular function 
// we are going to use the method called setInterval.

setInterval(ticking, 1000);