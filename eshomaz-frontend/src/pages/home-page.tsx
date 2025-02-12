import { Home } from "@/components/layout/home";
import { useSaveUser } from "@/hooks/useSaveUser";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect } from "react";

export const HomePage = () => {
    const { user } = useKindeAuth();
    const { saveUser } = useSaveUser();

    // logout()
    useEffect(() => {
        if(!user?.email) return;
        saveUser();
    }, [user?.email]);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#121212]">
            <Home/>
        </div>
    )
};