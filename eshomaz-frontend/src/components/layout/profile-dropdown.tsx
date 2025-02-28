import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
    Bell, 
    HelpCircle, 
    LogOut, 
    Settings, 
    Sun, 
    User 
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { useUserInfo } from "@/provider/user-info-context";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const ProfileDropdown = ({ button }: { button: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { personalInfo } = useUserInfo();
    const { logout } = useKindeAuth();

    const [theme, setTheme] = useState<boolean>(() => {
        return localStorage.getItem("eshomaz-theme") === "dark" || true;
    });

    const handleThemeChange = () => {
        setTheme(!theme);
        localStorage.setItem("dashdeals-theme", !theme ? "dark" : "light");
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme);
    }, [theme]);
    
    return (
        <div className="bg-background flex items-start">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen} >
            <DropdownMenuTrigger asChild>
                {button}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="md:w-80" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-2 p-2">
                <p className="text-lg font-medium leading-none">{personalInfo.firstName} {personalInfo.lastName}</p>
                <p className="text-sm leading-none text-muted-foreground">{personalInfo.email}</p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="p-3">
                <Link to="/profile" className="flex items-center">
                <User className="mr-3 h-5 w-5" />
                <span className="text-base">Profile</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3">
                <Link to="/settings" className="flex items-center">
                <Settings className="mr-3 h-5 w-5" />
                <span className="text-base">Settings</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3">
                <Link to="/notifications" className="flex items-center">
                <Bell className="mr-3 h-5 w-5" />
                <span className="text-base">Notifications</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleThemeChange()} className="p-3 flex items-center">
                <Sun className="mr-3 h-5 w-5" />
                <span className="text-base flex-grow">Theme</span>
                <Switch checked={theme} />
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="p-3">
                <Link to="/help" className="flex items-center">
                <HelpCircle className="mr-3 h-5 w-5" />
                <span className="text-base">Help</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()} className="p-3 flex items-center">
                <LogOut className="mr-3 h-5 w-5" />
                <span className="text-base">Log out</span>
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
    )
};