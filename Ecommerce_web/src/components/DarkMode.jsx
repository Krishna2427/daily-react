// import lightMode from '../assets/website/light-mode.png'
// import darkMode from '../assets/website/dark-mode.jpeg'
// import { useEffect, useState } from 'react'
// const DarkMode=()=>{
//     const [them, setThem] = useState(
//         localStorage.getItem("them") ? localStorage.getItem("them"):"light"
//     );

//     const element = document.documentElement;// html elemets
//     //console.log(element)
//     useEffect(()=>{
//         if(them === "dark"){
//             element.classList.add('dark');
//             localStorage.setItem("them", "dark");
//         }else{
//             element.classList.remove("dark");
//             localStorage.setItem("them", "light");
//         }
//     }, [them])
//     return(
//         <div className='relative'>
//             <img src={lightMode} alt="" 
//             onClick={()=> setThem(them ==="light" ? "dark":"light")}
//             className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all
//             duration-300 rounded-full absolute right-0 z-10 ${them =="dark:" ? "opacity-0": "opacity-100"}`}/>

//             <img src={darkMode} alt="" 
//              onClick={()=> setThem(them ==="light" ? "dark":"light")}
//             className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all
//             duration-300 rounded-full'/>
//         </div>
//     )
// }
