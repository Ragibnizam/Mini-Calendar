const month= document.querySelector(".month")
const weekday= document.querySelector(".weekday")
const day= document.querySelector(".day")
const year= document.querySelector(".year")



window.addEventListener("DOMContentLoaded",()=>{
 
  let nowDate=new Date()
  console.log(nowDate.getMonth());
  
  month.innerText=  nowDate.toLocaleString("en-IN", { month: "long" });
  weekday.innerText=nowDate.toLocaleString("en-IN",{weekday:"long"});
  day.innerText=nowDate.getDate()
  year.innerText=nowDate.getFullYear()
})
