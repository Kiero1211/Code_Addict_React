import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

function AppProvider({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage ] = useState({page: "", links: []});

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find(link => link.page === text.toLowerCase());
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            openSubmenu,
            closeSidebar,
            closeSubmenu,
            location,
            page
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};