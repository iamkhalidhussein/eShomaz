import { HomePageSkeleton } from "@/components/skeletons/homepage-skeleton";
import { WelcomePage } from "@/pages/welcome-page";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { ReactNode } from "react";

interface SecureRouteProps {
    children: ReactNode;
};

export const SecureRoute = ({ children }: SecureRouteProps) => {
    const { user, isLoading, isAuthenticated } = useKindeAuth();

    if(isLoading) {
        return <HomePageSkeleton/>;
    }

    console.log('user+auth', user, isAuthenticated);
    if(!user || !isAuthenticated) {
        return (
            <WelcomePage/>
        )
    }

    return (
        <>
            {children}
        </>
    )
};