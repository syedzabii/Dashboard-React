import axios from "axios";
import { useRef } from "react";
import { authActions } from "../../store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { Navigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import apiClient from "../../services/api-client";
import { giveToast } from "@/lib/utils";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state: ReduxState) => state.auth);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (emailRef.current !== null && passwordRef.current !== null) {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const { data } = await apiClient.post(
          "/admin/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        );

        dispatch(authActions.setIsAuthenticated(true));
        dispatch(authActions.setAdmin({ name: data.admin.name }));
        dispatch(authActions.authCheckComplete());
      }
    } catch (error: any) {
      // toast(error.response.data.message, {
      //   duration: 10000,
      //   position: "top-left",
      //   icon: <span>⚠️</span>,
      // });
      console.log(error, "fdaf");
      if (axios.isAxiosError(error)) {
        if (!error.response?.data.message) {
          console.log(error.message, "ifff");
          giveToast(error.message, "⚠️");
        }
      }
      giveToast(error.response.data.message, "❌");
      dispatch(authActions.setIsAuthenticated(false));
      dispatch(authActions.authCheckComplete());
    }
  };
  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <h1 className="mb-12 text-center   sm:text-2xl font-semibold">
        Welcome to Admin Page, Log into your account
      </h1>
      <Toaster />
      <form
        onSubmit={submitHandler}
        className="w-full max-w-xl flex flex-col items-center gap-4 bg-white pt-16 pb-16"
      >
        <input
          type="email"
          placeholder="Enter your email here"
          ref={emailRef}
          required
          className="text-sm  border-y-2 border-t-0 w-1/2 pb-2 focus:outline-none  focus:border-blue-600 text-slate-700"
        />

        <input
          type="password"
          ref={passwordRef}
          required
          placeholder="Enter your password here"
          className="text-sm border-y-2 border-t-0 w-1/2 pb-2 focus:outline-none focus:border-blue-600"
        />

        <button className="text-sm sm:text-base bg-blue-600 w-1/2 p-2 rounded-md text-white active:bg-blue-500">
          Login as Admin
        </button>
        <p className="text-xs text-gray-400">
          Having trouble logging in?
          <span className="text-blue-800 font-semibold cursor-pointer pl-1">
            Contact Support
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
