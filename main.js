// lets just reference first
const clock = document.querySelector('.clock');
// now lets create the function and this function is going to print for us the time but on the basis of a second
const ticking = () =>{
  // now lets create the new date and assign it to the now variable
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
 const p = `<h1>In case you for get Time, it is</h1>
 <p><span>${hours}h :</span> <span>${minutes}min :</span> <span>${seconds}sec</span> </p>`
  clock.innerHTML= p;

}
// now how are we going to call this particular function 
// we are going to use the method called setInterval.

setInterval(ticking, 1000);