"use client"
import { createContext, useState , useContext, useEffect} from 'react';
import {useRouter} from 'next/navigation';
 const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentData, setStudentData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username,setUsername] = useState('')
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push('/Login');
    }
  }, []);


  return (
    <StudentContext.Provider value={{ studentData, setStudentData,isAuthenticated, setIsAuthenticated,username,setUsername }}>
            

      {children}
    </StudentContext.Provider>
  );
};
export function useStudent() {
    return useContext(StudentContext);
  }
  export default StudentContext;
