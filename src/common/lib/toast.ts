import toast from "react-hot-toast";

export const toastError = (msg: string) => toast.error(msg);

export const toastSuccess = (msg: string) => toast.success(msg);
