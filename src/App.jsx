import { RouterProvider } from "react-router-dom";
import Home from "./pages/user/Home";
import { router } from "./routes/Router";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
