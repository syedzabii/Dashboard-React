import { useLocation, NavLink } from "react-router-dom";
import { Student } from "../interfaces/Student";
const StudentDetail = () => {
  const location = useLocation();
  const student: Student = location.state?.student;
  console.log(student, "hii");
  if (!student) return <h1>No student data available!!</h1>;
  return (
    <div className="m-4">
      <h1>{student.studentName}</h1>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      {/* Render more details as needed */}
      <NavLink to="/">Back</NavLink>
    </div>
  );
};

export default StudentDetail;
