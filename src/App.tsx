import MainLayout from "./components/MainLayout";
import StudentContextProvider from "./store/student-context-store";

function App() {
  return (
    <StudentContextProvider>
      <MainLayout />
    </StudentContextProvider>
  );
}

export default App;
