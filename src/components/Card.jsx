 import React from 'react'
 
 
 function Card({username="DefaultName",img="src/assets/images/d.jpg"}) {
   return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 hover:scale-110 transition-all duration-550 cursor-pointer">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-xl rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium text-white">
        “A computer engineer designs, develops, and maintains computer 
        systems and hardware. They work with a variety of aspects of computer 
        systems, including software, robotics, and operating systems.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      {username}
      </div>
      <div className="text-slate-200">
        Computer Engineer, India
      </div>
    </figcaption>
  </div>
 </figure>
    </div>
   )
 }
 
 export default Card
 