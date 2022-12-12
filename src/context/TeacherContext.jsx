import { createContext, useState } from 'react';
import TeacherService from '../services/teacher';

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [dashboardInfo, setDashboardInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getDashboardInfo = async () => {
    setIsLoading(true);
    const res = await TeacherService.getDashboardInfo();
    setDashboardInfo(res);
    setIsLoading(false);
  };

  return (
    <TeacherContext.Provider
      value={{
        getDashboardInfo,
        isLoading,
        dashboardInfo,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherContext;
