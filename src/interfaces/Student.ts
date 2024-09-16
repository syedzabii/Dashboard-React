export interface Student {
  _id: string;
  studentName: string;
  age: number;
  email: string;
  education: string;
}

export interface StudentContextType {
  studentList: Student[];
  addAllStudents: (students: Student[]) => void;
}
