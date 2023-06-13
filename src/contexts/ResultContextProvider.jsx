import {createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseURL = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api';

// eslint-disable-next-line react/prop-types
export const ResultContextProvider = ({children})=> {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Coustom Search Engine');

    const getResults = async(type)=> {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${type}`,{
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '745d71b711msh5ea3c032822a023p17a214jsn8e88cab78824',
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }    
    })
    const data = response.json();
    console.log(data);
    data.then((res)=>setResults(res.value));
    setIsLoading(false);
    }

    return(
      <ResultContext.Provider value={{results, getResults, isLoading, searchTerm, setSearchTerm}}>
          {children}
      </ResultContext.Provider>
    );
}

export const useResultContext = ()=> useContext(ResultContext);
