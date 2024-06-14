import { Bounce, toast } from "react-toastify";

export const seeToast = (msg, type = "default") => {
  toast(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    type: type,
  });
};
