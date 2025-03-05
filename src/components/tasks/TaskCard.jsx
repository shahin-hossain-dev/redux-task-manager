import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTask,
  updateStatus,
} from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const pending = task.status === "pending";
  const running = task.status === "running";
  const done = task.status === "done";

  let newStatus;
  if (pending) {
    newStatus = "running";
  } else if (running) {
    newStatus = "done";
  } else if (done) {
    newStatus === "archive";
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          pending ? "text-sky-500" : ""
        } ${running ? "text-yellow-500" : ""} ${done ? "text-green-500" : ""}`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: newStatus }))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
