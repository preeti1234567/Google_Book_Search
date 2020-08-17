import React, {
    createContext,
    useContext,
    useReducer
} from "react";
import API from "../utils/API";
const BookContext = createContext();

const Provider = BookContext.Provider;

const reducer = (state, action) => {
    switch (action.type) {
        case "searchInput":
            return {...state, searchInput: action.searchInput}

        case "searchResults":
            return {...state, searchResults: action.searchResults}

        case "saveBook":
            const item = state.searchResults.filter(result => (
                result.id === action.id));
            return API.saveBook(item);
            
        case "deleteBook": 
                const id = action.id;
            return API.deleteBook(id);
            
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};


const BookProvider = ({
    value = {},
    ...props
}) => {
    const [state, dispatch] = useReducer(reducer, {});

    return <Provider value = {
        [state, dispatch]
    } {
        ...props
    }
    />;
};

const useBookContext = () => {
    return useContext(BookContext)
}

export {
    BookProvider,
    useBookContext
};