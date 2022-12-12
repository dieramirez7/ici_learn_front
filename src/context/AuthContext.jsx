import { createContext, useState, useEffect } from 'react';
import AuthServices from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [token, setToken] = useState(null);
  const [student, setStudent] = useState({});
  const [teacher, setTeacher] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loginStudent = async (token, userId) => {
    setIsLoading(true);
    try {
      localStorage.setItem('token', token);
      const studentData = await AuthServices.getStudent(userId);
      setStudent(studentData);
      setToken(token);
      setIsStudent(true);
      setIsTeacher(false);
      localStorage.setItem('userId', userId);
      localStorage.setItem('isStudent', true);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const loginTeacher = async (token, userId) => {
    setIsLoading(true);
    try {
      localStorage.setItem('token', token);
      const teacherData = await AuthServices.getTeacher(userId);
      setTeacher(teacherData);
      setToken(token);
      setIsTeacher(true);
      setIsStudent(false);
      localStorage.setItem('userId', userId);
      localStorage.setItem('isTeacher', true);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setStudent({});
    setTeacher({});
    setIsStudent(false);
    setIsTeacher(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('isStudent');
    localStorage.removeItem('isTeacher');
  };

  const updateStudent = (newStudent) => {
    setStudent(newStudent);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    if (token && userId) {
      if (localStorage.getItem('isStudent') === 'true') {
        loginStudent(token, userId);
      } else {
        loginTeacher(token, userId);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        loginStudent,
        loginTeacher,
        logout,
        student,
        isLoading,
        updateStudent,
        isStudent,
        isTeacher,
        teacher,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
