import React, { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import John from "../../assets/John.jpeg";
import NavBar from "../common/NavBar";
import axios from "axios";
import apiClient from "../../services/api-client";
import { Student } from "@/interfaces/Student";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PaginationShad from "../common/PaginationShad";
import AlertDestructive from "../common/AlertDestructive";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/AuthSlice";
import { useMediaQuery } from "react-responsive";

const StudentsViewPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const isMd = useMediaQuery({
    minWidth: 768,
  });
  const dispatch = useDispatch();
  const itemsPerPage = 5;

  const fetchConfirmedStudents = async () => {
    try {
      const response = await apiClient.get(
        `/confirmedstudent/paginStudents?page=${currentPage}&limit=${itemsPerPage}`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          dispatch(authActions.setSessionExpired(true));
        }
      }

      console.log(error);
      throw error;
    }
  };

  interface StudentResponse {
    students: Student[];
    totalPages: number;
  }

  const {
    data: studentList,
    isError,
    isLoading,
  } = useQuery<StudentResponse, Error>({
    queryKey: ["confirmedstudents", currentPage, itemsPerPage],
    queryFn: fetchConfirmedStudents,
    refetchOnMount: false,
  });

  const students = studentList?.students ?? [];

  const totalPages = studentList?.totalPages ?? 1;

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const filteredStudents = useMemo(() => {
    return students?.filter(
      (student) =>
        student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [students, searchTerm]);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) return <p>error</p>;

  return (
    <div className="w-full">
      <NavBar />
      <div className="md:px-6 py-8">
        <div className="mb-4 flex items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for a student by name or email"
              className="w-full text-xs md:text-base pl-10 pr-4 py-2 border rounded-md"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={isMd ? 20 : 15}
            />
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs md:text-base border-b">
              <th className="py-2 px-2">Student Photo</th>
              <th className=" py-2 px-2">Name</th>
              <th className="  py-2 px-2">Email</th>
              <th className="py-2 px-2">Age</th>
              <th className="py-2 px-2">Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents?.map((student, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-2  flex text-xs md:text-base items-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 rounded-full bg-gray-300 mr-3">
                    <img src={John} className="rounded-full" alt="" />
                  </div>
                </td>
                <td className="   py-3 px-2 text-xs md:text-base">
                  {student.studentName}
                </td>
                <td className="  py-3 px-2 text-xs md:text-base">
                  {student.email}
                </td>

                <td className="py-3 px-2 text-xs md:text-base">
                  {student.age}
                </td>
                <td className="py-3 px-2 text-xs md:text-base">
                  {student.gender}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationShad
        currentPage={currentPage}
        handlePageChange={onPageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default StudentsViewPage;
