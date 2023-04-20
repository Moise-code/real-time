// lets just reference first
const clock = document.querySelector('.clock');
// now lets create the function and this function is going to print for us the time but on the basis of a second
const ticking = () =>{
  const now = new Date();
  // const TimeDifference = afterDate.getTime() - now.getTime();
  // console.log(new Date(TimeDifference));
  const beforeDate = new Date('april 20 2023 12:30:00');
  const beforeHours = beforeDate.getHours();
  const beforeMinutes = beforeDate.getMinutes();
  const beforeSeconds = beforeDate.getSeconds();

  const dateTime = dateFns.distanceInWords(now, beforeDate);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
 const p = `<h1>IN CASE YOU FORGET TIME ITS:</h1>
 <p><span class="hours">${hours}h :</span> <span class="minutes">${minutes}min :</span> <span class="seconds">${seconds}sec </span></p>
 <h1>You are remaining with:</h1>
 <p>${dateTime}to finish the quiz</p>
 <h1>THE QUIZ ENDS AT:</h1>
 <P>${beforeHours}h : ${beforeMinutes}min : ${beforeSeconds}sec</P>
 `
 
  clock.innerHTML= p;


}
// now how are we going to call this particular function 
// we are going to use the method called setInterval.

setInterval(ticking, 1000);

// then formating time in the right way it is somehow hard then we can just use the so called js library called dates fns