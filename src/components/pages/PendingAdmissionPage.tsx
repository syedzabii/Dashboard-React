import React, { useCallback, useEffect, useState } from "react";
import { Eye } from "lucide-react";
import StudentDetailModal from "../common/StudentDetailModal";
import NavBar from "../common/NavBar";
import apiClient from "../../services/api-client";
import PaginationShad from "../common/PaginationShad";
import { Toaster } from "sonner";
import { Student } from "@/interfaces/Student";
import axios from "axios";
import { giveToast } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/AuthSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMediaQuery } from "react-responsive";
import Message from "../common/Message";

const PendingAdmissionPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const isMd = useMediaQuery({
    minWidth: 768,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [students, setstudents] = useState<Student[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const itemsPerPage = 5;

  const handleAccept = async (student: Student) => {
    try {
      const res = await apiClient.post(
        "/confirmedstudent/new",
        { ...student },
        { withCredentials: true }
      );
      giveToast(res.data.message, "✅");

      await apiClient.delete(`/student/${student._id}`, {
        withCredentials: true,
      });
      fetchStudent();
      console.log("deleted after accepting");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.response.data, "kya hi");
        giveToast(error.response.data.message, "❌");
      } else {
        giveToast("An unexpected error occurred", "❌");
      }
    }
  };
  const { mutate: acceptStudent, isError } = useMutation({
    mutationFn: handleAccept,
    onSuccess: () => {
      console.log("onSuccess: invalidating & refetching");
      queryClient.invalidateQueries({
        queryKey: ["confirmedstudents"],
      });
      queryClient.refetchQueries({
        queryKey: ["confirmedstudents"],
      });
    },
  });

  // const handleAccepta = (student: Student) => {
  //   console.log("first acceept call");
  //   apiClient
  //     .post("/confirmedstudent/new", { ...student }, { withCredentials: true })
  //     .then((res) => {
  //       giveToast(res.data.message, "✅");
  //       queryClient.invalidateQueries({
  //         queryKey: ["confirmedstudents"],
  //       });
  //       apiClient
  //         .delete(`/student/${student._id}`, {
  //           withCredentials: true,
  //         })
  //         .then((res) => {
  //           console.log("deleted after accepting");
  //           fetchStudent();
  //         });
  //     })
  //     .catch((error) => {
  //       if (axios.isAxiosError(error)) {
  //         if (error.response) {
  //           console.log(error.response.data, "kya hi");
  //           giveToast(error.response.data.message, "❌");
  //         } else {
  //           giveToast("An error occurred", "❌");
  //         }
  //       } else {
  //         giveToast("An unexpected error occurred", "❌");
  //       }
  //     });
  // };

  const handleReject = async (student: Student) => {
    console.log("Rejected student:", student);
    await apiClient.delete(`/student/${student._id}`, {
      withCredentials: true,
    });
    giveToast(`Student deleted ${student.studentName}`, "⚠️");
    fetchStudent();
  };

  const fetchStudent = useCallback(async () => {
    console.log("fetcinguseffect pending");
    apiClient
      .get(`/student/paginStudents?page=${currentPage}&limit=${itemsPerPage}`, {
        withCredentials: true,
      })
      .then((res) => {
        setTotalPages(res.data.totalPages);
        setstudents(res.data.students);
      })
      .catch((error) => {
        console.log(error, "kfl");
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            console.log("401401401");
            dispatch(authActions.setSessionExpired(true));
          }
          if (error.response?.data.students.length === 0) {
            setstudents([]);
          }
        }

        // giveToast(error.response.data.message, "❌");
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  const handleView = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) return <p>Loading....</p>;
  return (
    <div className="min-h-screen w-full mt-10">
      <NavBar />
      <div className="overflow-x-auto px-2 py-10">
        <Toaster />
        {students.length === 0 ? (
          <div className="text-center">
            <Message message="There are no pending admission as of now..." />
          </div>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b text-left">
                  Name
                </th>
                <th className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b text-left">
                  Age
                </th>
                <th className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b text-left">
                  Gender
                </th>
                <th className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className={"bg-white"}>
                  <td className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b">
                    {student.studentName}
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b">
                    {student.age}
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b">
                    {student.gender}
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-xs sm:text-base border-b text-center">
                    <button
                      onClick={() => handleView(student)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded inline-flex items-center"
                    >
                      <Eye size={isMd ? 16 : 10} className="mr-1" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <StudentDetailModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          student={selectedStudent}
          onAccept={acceptStudent}
          onReject={handleReject}
        />
      </div>
      <div className="w-full">
        {!(students.length === 0) && (
          <PaginationShad
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default PendingAdmissionPage;
