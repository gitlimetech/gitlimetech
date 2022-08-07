import React, {useState, useEffect} from 'react';
const Footer = () => {
    const [year, setYear] = useState('2022');
    useEffect(() => {
        let currentYear = new Date().getFullYear();
        setYear(currentYear);
        return () => {
            setYear('')
        };
    }, [year]);
   return(
       <>
       <footer className="bg-light text-center footer">
<p>© {year} <strong>gitLime.com</strong> All rights reserved.</p>
       </footer>
       </>
   ) 
}
export default Footer;