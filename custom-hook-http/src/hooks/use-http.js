import { useState, useCallback } from "react";

const useHttp = (requestObj, transformData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendHttpRequest = useCallback( async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(
            requestObj.url, {
                method: requestObj.method || 'GET',
                headers: requestObj.headers || {},
                body: requestObj.body ? JSON.stringify(requestObj.body) : null,
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
          transformData(data);

        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      }, [requestObj, transformData]);

      return {
          isLoading,
          error,
          sendHttpRequest,
      }
};

export default useHttp;