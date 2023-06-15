import { useEffect } from "react";

const useTitle = title =>{
    useEffect(() =>{
        document.title = `Summer Vacation|${title}`
    },[title]);
};

export default useTitle;