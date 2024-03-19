import './App.css';
import { MdMenuOpen } from "react-icons/md";
import { IoIosClose } from "react-icons/io";


// import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <div onClick={() => setOpen(!open)} className='text-xl md:hidden'>
        {open === true ? <IoIosClose /> : <MdMenuOpen />}
      </div>
      <Navbar></Navbar>
    </>
  )
}

export default App
