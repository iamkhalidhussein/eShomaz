import { Home, Users, MessageCircle, Bell, Menu, Search } from 'lucide-react';
import { NavItem } from '@/components/layout/nav-item';
import { userData } from '@/data/mock-data';
import { Link } from 'react-router-dom';

interface HeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
};

export const Header = ({ currentPage, setCurrentPage }: HeaderProps) => {
    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <Link to="/">
                <h1 className="text-2xl font-bold text-blue-600">eShomaz</h1>
            </Link>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search eShomaz"
                    className="bg-gray-100 rounded-full py-2 px-4 pl-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
            <NavItem icon={<Home />} active={currentPage === 'home'} onClick={() => setCurrentPage('home')} />
            <NavItem icon={<Users />} />
            <NavItem icon={<MessageCircle />} />
            <NavItem icon={<Bell />} />
            <Link to="/profile">
            <button 
                onClick={() => {}}
                className="ml-2"
            >
                <img
                src={userData.avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
                />
            </button>
            </Link>
            </nav>
            <button className="md:hidden">
            <Menu className="h-6 w-6" />
            </button>
        </div>
    </header>
    )
};