import  {createContext, useState, useEffect, } from "react";
import axiosInstance from "../utils/axiosInstance.js"
import { API_PATHS } from "../utils/apiPaths.js";

export const UserContext = createContext();

const UserProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true); // New state to track loading

const clearUser = () => {
        setUser(null);
        localStorage.removeItem("token");
    };  // the clearuser should be after the Update user, but here it is used  before the useEffect becuase the clearUser is used inside the useEffect it throw as an error the vairable is used before declaring it,"temporal dead zone"

useEffect( () => {
    if (user) return;

    const accessToken = localStorage.getItem("token");
    if(!accessToken) {
        setLoading(false);
        return;
    }

    const fetchUser = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
            setUser (response.data);
        } catch (error) {
            console.error("User not authenticated",error);
            clearUser();
        } finally {
            setLoading(false);
        }
    };

    fetchUser();
}, []);


    const updateUser = (userData) => {
        setUser(userData);
        localStorage.setItem("token",userData.token);//Save tken
    }


    return (
        <UserContext.Provider value={{user, loading, updateUser, clearUser}}>
            {children}
        </UserContext.Provider>
    );
};


export default UserProvider;