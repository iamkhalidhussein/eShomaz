import React from "react";

interface NavItemProps {
    icon: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
};

export const NavItem = ({ icon, active = false, onClick }: NavItemProps) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 rounded-lg hover:bg-gray-100 ${
                active ? 'text-blue-600' : 'text-gray-600'
            }`}
        >
            {icon}
        </button>
    )
};