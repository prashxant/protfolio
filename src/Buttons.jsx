function Button() {
    return (
       <div className="p-2 ">
        <div  className="flex justify-center  gap-10">
         <div  >
         <a href="https://github.com/prashxant" target="_blank" rel="noopener noreferrer">
         <svg class="h-12 w-12 text-slate-900  "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>       
        </a>
        </div>
         <div className="pt-1">
         <a href="mailto:notxdead0@gmail.com">
         <svg class="h-12 w-12 text-slate-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
       
       </a> </div>
         <div>
         <a href="https://www.linkedin.com/in/prash11/" target="blank">
         <svg class="h-12 w-12 text-slate-900"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
         </a>
         </div>
        </div>
        <div className="p-2  ">
        <div  className="flex justify-center  gap-4">
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow">
            About
        </button> 
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow">
            Blog
        </button>
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow">
            Resume
        </button>  
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow">
            Skills
        </button>               
        </div>
        </div>
       </div>
    );
  }
  
  export default Button;
