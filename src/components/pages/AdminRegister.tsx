import axios from "axios";
import { useRef } from "react";
import { toast, Toaster } from "sonner";
import NavBar from "../common/NavBar";

const AdminRegister = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (
        emailRef.current !== null &&
        passwordRef.current !== null &&
        nameRef.current !== null
      ) {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const { data } = await axios.post(
          "http://localhost:8000/api/v1/admin/new",
          {
            name,
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );
        toast(data.message, {
          duration: 10000,
          position: "top-left",
          icon: <span>✅</span>,
        });
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
      }
    } catch (error: any) {
      toast(error.response.data.message, {
        duration: 10000,
        position: "top-left",
        icon: <span>⚠️</span>,
      });
    }
  };

  return (
    <div className="w-full">
      <NavBar />
      <div className="min-h-screen -mt-8 flex flex-col justify-center items-center bg-gray-50">
        <h1 className="mb-12 text-2xl font-semibold">Admin Registration</h1>
        <Toaster />;
        <form
          onSubmit={submitHandler}
          className="w-full max-w-xl flex flex-col items-center gap-4 bg-white pt-16 pb-16"
        >
          <h1 className="text-slate-600 mb-6">
            It is our great pleasure to have you on board!
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            ref={nameRef}
            required
            className=" border-y-2 border-t-0 w-1/2 pb-2 focus:outline-none  focus:border-blue-600 text-slate-700"
          />

          <input
            type="email"
            placeholder="Enter your email here"
            ref={emailRef}
            required
            className=" border-y-2 border-t-0 w-1/2 pb-2 focus:outline-none  focus:border-blue-600 text-slate-700"
          />

          <input
            type="password"
            ref={passwordRef}
            required
            placeholder="Set your password here"
            className="border-y-2 border-t-0 w-1/2 pb-2 focus:outline-none focus:border-blue-600"
          />

          <button className="bg-blue-600 w-1/2 p-2 rounded-md text-white active:bg-blue-500">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
