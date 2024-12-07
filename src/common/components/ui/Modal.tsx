import { Modal as MantineModal, type ModalProps } from "@mantine/core";

type ComponentProps = {
  children: React.ReactNode;
} & ModalProps;

const Modal = ({ children, ...props }: ComponentProps) => {
  return (
    <MantineModal centered {...props} padding="lg">
      {children}
    </MantineModal>
  );
};

export default Modal;
