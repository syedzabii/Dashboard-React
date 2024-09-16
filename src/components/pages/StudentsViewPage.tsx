import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import John from "../../assets/John.jpeg";
import NavBar from "../common/NavBar";
import axios from "axios";
import apiClient from "../../services/api-client";

interface Student {
  name: string;
  studentId: string;
  emailAddress: string;
  class: string;
  gender: string;
}

const students: Student[] = [
  {
    name: "Eneh Mercy",
    studentId: "703703",
    emailAddress: "michelle.rivera@example.com",
    class: "J SS 2",
    gender: "Female",
  },
  {
    name: "Marvin McKinney",
    studentId: "877037",
    emailAddress: "kenzi.lawson@example.com",
    class: "JSS 3",
    gender: "Female",
  },
  {
    name: "Brooklyn Simmons",
    studentId: "370357",
    emailAddress: "nathan.roberts@example.com",
    class: "SS 3",
    gender: "Female",
  },
  {
    name: "Dianne Russell",
    studentId: "870316",
    emailAddress: "felicia.reid@example.com",
    class: "SS 3",
    gender: "Male",
  },
  {
    name: "Cody Fisher",
    studentId: "547030",
    emailAddress: "tim.jennings@example.com",
    class: "SS 3",
    gender: "Female",
  },
  {
    name: "Guy Hawkins",
    studentId: "270374",
    emailAddress: "alma.lawson@example.com",
    class: "JSS 1",
    gender: "Male",
  },
  {
    name: "Devon Lane",
    studentId: "970322",
    emailAddress: "debra.holt@example.com",
    class: "JSS 3",
    gender: "Female",
  },
  {
    name: "Ronald Richards",
    studentId: "570336",
    emailAddress: "deanna.curtis@example.com",
    class: "J SS 4",
    gender: "Male",
  },
  {
    name: "Bessie Cooper",
    studentId: "157034",
    emailAddress: "georgia.young@example.com",
    class: "J SS 4",
    gender: "Female",
  },
  {
    name: "Eleanor Pena",
    studentId: "570356",
    emailAddress: "jackson.graham@example.com",
    class: "JSS 5",
    gender: "Male",
  },
  {
    name: "Savannah Nguyen",
    studentId: "177037",
    emailAddress: "dolores.chambers@example.com",
    class: "JSS 1",
    gender: "Female",
  },
];

const StudentsViewPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [StudentDetail, setStudentDetail] = useState([]);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.emailAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>
          <button className="ml-4 px-4 py-2 bg-gray-200 rounded-md">
            Add filter
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Student ID</th>
              <th className="py-2">Email address</th>
              <th className="py-2">Class</th>
              <th className="py-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={student.studentId}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-3">
                    <img src={John} className="rounded-full" alt="" />
                  </div>
                  {student.name}
                </td>
                <td className="py-3">{student.studentId}</td>
                <td className="py-3">{student.emailAddress}</td>
                <td className="py-3">{student.class}</td>
                <td className="py-3">{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsViewPage;
