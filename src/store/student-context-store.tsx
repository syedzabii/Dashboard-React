import { ReactNode, createContext, useState } from "react";
import { Student, StudentContextType } from "../interfaces/Student";

export const StudentContext = createContext<StudentContextType>({
  studentList: [],
  addAllStudents: (studentList: Student[]) => {},
});

interface Props {
  children: ReactNode;
}

const StudentContextProvider = ({ children }: Props) => {
  const [studentList, setStudentList] = useState<Student[]>([]);

  const addAllStudents = (studentList: Student[]) => {
    setStudentList(studentList);
  };
  return (
    <StudentContext.Provider value={{ studentList, addAllStudents }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
