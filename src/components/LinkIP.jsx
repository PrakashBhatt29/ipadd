import { useEffect, useState } from "react";

import { useCookies } from 'react-cookie';


export const LinkIP = () => {
    const [setCookie] = useCookies(['cookie-name']);
    const [ip, setIp] = useState('');
    // const [sessionId, setSessionId] = useState("");
    useEffect(() => {
      const fetchIp = async () => {
        try {
          const response = await fetch('https://api64.ipify.org?format=json'); // External API
          const { ip } = await response.json();
          setIp(ip);
          // const sessionResponse = await axios.post(
          //   "http://127.0.0.1:8000/generate-session",
          //   {
          //     ip_address: ip,
          //   }
          // );
        //   setSessionId(sessionResponse.data.session_id);
        // setCookie ('session_id', sessionResponse.data.session_id, {path: '/'});
          
        } catch (error) {
          console.error('Error fetching IP:', error);
        }
      };
  
      fetchIp();
    }, []);
  
    return (
      <div>
        <h3>Your IP Address: {ip}</h3>
      </div>
    );
  }