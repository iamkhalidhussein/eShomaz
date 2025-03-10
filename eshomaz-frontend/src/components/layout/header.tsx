import { Home, Users, MessageCircle, Bell, Search } from 'lucide-react';
import { NavItem } from '@/components/layout/nav-item';
import { Link } from 'react-router-dom';
// import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { useUserInfo } from '@/provider/user-info-context';
import { ProfileDropdown } from '@/components/layout/profile-dropdown';

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

export const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
    // const { user, isAuthenticated } = useKindeAuth();
    const { personalInfo } = useUserInfo();
    // logout()
    // console.log(user, isAuthenticated)

    const button = (
        <button 
            onClick={() => {}}
            className="ml-2"
            >
            <img
                src={personalInfo.profilePhoto}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
            />
        </button>
    );

    return (
        <header className="bg-white dark:bg-[#0A0A0A] shadow-md fixed w-full top-0 z-50">
        <div className="mx-auto px-4 py-3 flex items-center justify-between">
            <div className="md:flex items-center hidden space-x-4">
            <Link to="/" className='md:block hidden'>
                <h1 className="text-2xl font-bold text-blue-600">eShomaz</h1>
            </Link>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search eShomaz"
                    className="bg-gray-100 dark:bg-[#27272A80] rounded-full py-2 px-4 pl-10 md:w-64 w-40 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            </div>
            <nav className="flex w-full items-center md:justify-end justify-between space-x-2">
            <Link to='/'>
            <NavItem icon={<Home />} active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
            </Link>
            <NavItem icon={<Search />} />
            <NavItem icon={<Users />} />
            <NavItem icon={<MessageCircle />} />
            <NavItem icon={<Bell />} />
            <ProfileDropdown button={button}/>
            </nav>
        </div>
    </header>
    )
};