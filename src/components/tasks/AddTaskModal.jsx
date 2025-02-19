import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));

    onCancel();
  };
  const onCancel = () => {
    setIsOpen(false);
    reset();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="w-full rounded"
            name=""
            id="title"
            {...register("title", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="title">Description:</label>
          <textarea
            type="text"
            className="w-full rounded"
            id="description"
            {...register("description", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            className="w-full rounded"
            id="deadline"
            {...register("date", { required: true })}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="assignTo">Assign To:</label>
          <select
            id="assignTo"
            className="rounded w-full"
            {...register("assignedTo", { required: true })}
          >
            <option defaultValue="Shahin Hossain">Shahin Hossain</option>
            <option value="Shahin Hossain">Akbor Sheikh</option>
          </select>
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            className="rounded w-full"
            {...register("priority", { required: true })}
          >
            <option defaultValue="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <button onClick={onCancel} type="button" className="btn btn-danger">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
