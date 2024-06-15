

"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn join-item btn-primary" disabled={pending}>
      {pending ? "Please wait..." : "Create Task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error");
      return;
    }

    if (state.message) {
      toast.success("Task created");
    }
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          className="input input-bordered join-item w-full"
          placeholder="Type Here"
          type="text"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
      <ToastContainer />
    </form>
  );
};

export default TaskForm;
