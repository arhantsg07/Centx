import Menu from "./menu.jsx";

const Navigation = () => {
  return (
    <nav className="flex items-center px-10 py-4 border-b-2 border-indigo-200">
     
      <div className="flex items-center gap-3">
        <div className='font-serif tracking-tighter text-2xl font-bold ml-16 mr-5'>
          <div className='flex flex-row'>
          <div className='mt-1 text-blue-800 font-fira ml-1'>C E N T X</div>
          </div>
          </div>
      </div>
      <Menu />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-auto'>Sign In</button>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ml-5 mr-32'>Sign Up</button>
    </nav>
  );
}

export default Navigation;
