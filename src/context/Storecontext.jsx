import { createContext } from 'react';
import { daily_list, food_display_menu } from '../utils';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        daily_list,
        food_display_menu
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;