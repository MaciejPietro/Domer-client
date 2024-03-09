import toast from "react-hot-toast";

export const toastError = (msg: string) => toast.error(msg);

export const successError = (msg: string) => toast.success(msg);
