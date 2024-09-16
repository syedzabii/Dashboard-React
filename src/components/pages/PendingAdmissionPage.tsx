import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import StudentDetailModal from "../common/StudentDetailModal";
import NavBar from "../common/NavBar";
import apiClient from "../../services/api-client";
import { FiRefreshCcw } from "react-icons/fi";

// Define the Student type
type Student = {
  studentName: string;
  age: number;
  gender: string;
  education: string;
  parentName: string;
  country: string;
  city: string;
  email: string;
  phoneNumber: string;
  studentPhoto: Record<string, never>;
};

// Sample data (3 student objects)
const students: Student[] = [
  {
    studentName: "Syed",
    age: 12,
    gender: "Male",
    education: "Master's Degree",
    parentName: "Nasreen Begum",
    country: "IN",
    city: "Bangalore",
    email: "syedismail@gmail.com",
    phoneNumber: "919538202240",
    studentPhoto: {},
  },
  {
    studentName: "Jane Doe",
    age: 14,
    gender: "Female",
    education: "High School",
    parentName: "John Doe",
    country: "US",
    city: "New York",
    email: "janedoe@example.com",
    phoneNumber: "1234567890",
    studentPhoto: {},
  },
  {
    studentName: "Alex Smith",
    age: 13,
    gender: "Non-binary",
    education: "Middle School",
    parentName: "Sarah Smith",
    country: "UK",
    city: "London",
    email: "alexsmith@example.com",
    phoneNumber: "9876543210",
    studentPhoto: {},
  },
];

const PendingAdmissionPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [Refresh, setRefresh] = useState(Boolean);

  useEffect(() => {
    apiClient
      .get("/student/paginStudents?page=1&itemsPerPage=1", {
        withCredentials: true,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  }, [Refresh]);

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleAccept = (student: Student) => {
    console.log("Accepted student:", student);
    // Implement your accept logic here
  };

  const handleReject = (student: Student) => {
    console.log("Rejected student:", student);
    // Implement your reject logic here
  };

  return (
    <div className="w-full">
      <NavBar />
      <div className="container mx-auto p-6">
        <button
          className="flex gap-2 mb-3"
          onClick={() => setRefresh((prev) => !prev)}
        >
          <FiRefreshCcw className="size-6 active:size-5 text-green-800" />
        </button>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Age</th>
              <th className="py-2 px-4 border-b text-left">Gender</th>
              <th className="py-2 px-4 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b">{student.studentName}</td>
                <td className="py-2 px-4 border-b">{student.age}</td>
                <td className="py-2 px-4 border-b">{student.gender}</td>
                <td className="py-2 px-4 border-b text-center">
                  <button
                    onClick={() => handleView(student)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded inline-flex items-center"
                  >
                    <Eye size={16} className="mr-1" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <StudentDetailModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          student={selectedStudent}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>
    </div>
  );
};

export default PendingAdmissionPage;
