import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type UserInfoType = {
    personalInfo: Record<string, any>
    refetchUserInfo: () => void
};

const UserInfoContext = createContext<UserInfoType>({
    personalInfo: {},
    refetchUserInfo: () => {}
});

export const useUserInfo = () => {
    return useContext(UserInfoContext);
};

export const UserInfoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { getUser } = useKindeAuth();
    const axiosPublic = useAxiosPublic();
    const [personalInfo, setPersonalInfo] = useState({});

    console.log(personalInfo)
    const fetchUserInfo = useCallback(async () => {
        try {
            const user = await getUser();
            if(!user?.email) return;
            const response = await axiosPublic.get(`/users/get-user-info/${user?.email}`);
            setPersonalInfo(response.data.savedUser);
            console.log(response);
        } catch (error) {
            console.error('error in useruserinfo hook', error);
        }
    }, [getUser, axiosPublic]);

    useEffect(() => {
        fetchUserInfo()
    }, [fetchUserInfo]);

    const refetchUserInfo = async () => {
        await fetchUserInfo();
    };

    return (
        <UserInfoContext.Provider value={{ personalInfo, refetchUserInfo }}>
            { children }
        </UserInfoContext.Provider>
    )
};