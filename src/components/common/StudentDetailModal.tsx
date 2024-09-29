import { Student } from "@/interfaces/Student";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";

// Sample data (3 student objects)

const StudentDetailModal: React.FC<{
  isOpen: boolean;
  closeModal: () => void;
  student: Student | null;
  onAccept: (student: Student) => void;
  onReject: (student: Student) => void;
}> = ({ isOpen, closeModal, student, onAccept, onReject }) => {
  if (!student) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Student Details
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <strong>Name:</strong> {student.studentName}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Age:</strong> {student.age}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Gender:</strong> {student.gender}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Education:</strong> {student.education}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Parent Name:</strong> {student.parentName}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Country:</strong> {student.country}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>City:</strong> {student.city}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Email:</strong> {student.email}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Phone:</strong> {student.phoneNumber}
                  </p>
                </div>

                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      onAccept(student);
                      closeModal();
                    }}
                  >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => {
                      onReject(student);
                      closeModal();
                    }}
                  >
                    Reject
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default StudentDetailModal;
