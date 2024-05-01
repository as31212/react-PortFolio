import { Link , useLocation} from "react-router-dom";



const Header = () => {
    const location = useLocation();
  return (
    <>
      <header className="shadow p-6">
        <ul className="flex gap-10 flex-row justify-end">
          <Link className="" to="/">
            <li className={location.pathname === '/' ? 'font-bold ease-in-out duration-300 hover:scale-105 text-cyan-500' : 'font-bold ease-in-out duration-300 hover:scale-105'}>About Me</li>
          </Link>
          <Link className="" to="/Projects">
            <li className={location.pathname === '/Projects' ? 'font-bold ease-in-out duration-300 hover:scale-105 text-cyan-500' : 'font-bold ease-in-out duration-300 hover:scale-105'}>Projects</li>
          </Link>
          <Link className="" to="/Contact">
            <li className={location.pathname === '/Contact' ? 'font-bold ease-in-out duration-300 hover:scale-105 text-cyan-500' : 'font-bold ease-in-out duration-300 hover:scale-105'}>Contact</li>
          </Link>
        </ul>
      </header>
    </>
  );
};

export default Header;
