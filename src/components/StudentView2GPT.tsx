import React, { useState } from "react";

type Student = {
  name: string;
  id: string;
  email: string;
  class: string;
  gender: string;
};

const students: Student[] = [
  {
    name: "Eneh Mercy",
    id: "703703",
    email: "michelle.rivera@example.com",
    class: "JSS 2",
    gender: "Female",
  },
  {
    name: "Marvin McKinney",
    id: "877037",
    email: "kenzi.lawson@example.com",
    class: "JSS 3",
    gender: "Female",
  },
  {
    name: "Brooklyn Simmons",
    id: "370357",
    email: "nathan.roberts@example.com",
    class: "SS 3",
    gender: "Female",
  },
  {
    name: "Dianne Russell",
    id: "870316",
    email: "felicia.reid@example.com",
    class: "SS 3",
    gender: "Male",
  },
  {
    name: "Cody Fisher",
    id: "547030",
    email: "tim.jennings@example.com",
    class: "SS 3",
    gender: "Female",
  },
  {
    name: "Guy Hawkins",
    id: "270374",
    email: "alma.lawson@example.com",
    class: "JSS 1",
    gender: "Male",
  },
  {
    name: "Devon Lane",
    id: "970322",
    email: "debra.holt@example.com",
    class: "JSS 3",
    gender: "Female",
  },
  {
    name: "Ronald Richards",
    id: "570336",
    email: "deanna.curtis@example.com",
    class: "JSS 4",
    gender: "Male",
  },
  {
    name: "Bessie Cooper",
    id: "157034",
    email: "georgia.young@example.com",
    class: "JSS 4",
    gender: "Female",
  },
  {
    name: "Eleanor Pena",
    id: "570356",
    email: "jackson.graham@example.com",
    class: "JSS 5",
    gender: "Male",
  },
  {
    name: "Savannah Nguyen",
    id: "177037",
    email: "dolores.chambers@example.com",
    class: "JSS 1",
    gender: "Female",
  },
];

const StudentTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filtering students based on the search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search and filter bar */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search for a student by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="border p-2 w-1/3 rounded-lg shadow-sm"
        />
        <button className="text-blue-500 ml-2">Add filter</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Student ID</th>
              <th className="text-left p-4">Email address</th>
              <th className="text-left p-4">Class</th>
              <th className="text-left p-4">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr
                  key={student.id}
                  className={`border-b ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                >
                  <td className="p-4">{student.name}</td>
                  <td className="p-4">{student.id}</td>
                  <td className="p-4">{student.email}</td>
                  <td className="p-4">{student.class}</td>
                  <td className="p-4">{student.gender}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentTable;
