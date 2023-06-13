import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

const Results = () => {
  const {getResults, results, searchTerm, setSearchTerm, isLoading} = useResultContext();
  const location = useLocation();
useEffect(()=>{
  if(searchTerm){
    if (location.pathname === "/images"){
      getResults(`/Search/ImageSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`);
    }else{
      getResults(`/Search/WebSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`);
    }
  }
}
, [searchTerm, location.pathname]);

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results.map(({url:link, title}, index) =>(
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                    {link.length >30? link.substring(0,30): link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ) )
          }
        </div>
      )
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
        {results.map(({url:imgUrl, imageWebSearchUrl, title}, index)=>(
          <a className="sm:p-3 p-5" href={imageWebSearchUrl} key={index} target="_blank" rel="noreferrer">
            <img src={imgUrl} loading="lazy"/>
            <p className="w-36 break-words text-sm mt-2 hover:underline hover:text-blue-400">
                {title}
            </p>
          </a>
        ))}
        </div>
      )
    default:
      return "Error"
  }
}
export default Results
