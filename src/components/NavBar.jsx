import { Images } from '../assets/images';
import Logo from '../assets/LudwickLogo-animated.svg';

export function NavBar() {
  const links = [
    { content: 'projects' },
    { content: 'about' },
    { content: 'contact' },
  ];

  return (
    <div className='bg-stone-200 font-fira font-light'>
      <div className='bg-transparent text-stone-700 font-semibold px-8 pt-2 flex justify-between items-center'>
        <div id='logo'>
          <object data={Images.LudwickLogo} className='w-32' alt='' />
        </div>
        <div id='navLinks'>
          <ul className='flex gap-12 font-normal text-xl'>
            {links.map((link, index) => (
              <a key={index} href=''>
                <li className='transition duration-300 ease-in-out rounded-md py-1 px-3 hover:bg-stone-700 hover:text-stone-200'>
                  {link.content}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
