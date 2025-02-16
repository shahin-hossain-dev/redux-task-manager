import Modal from "../../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <p>Here Is Content</p>
    </Modal>
  );
};

export default AddTaskModal;
