"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from 'zod';

export const getAllTasks = async () => {
  try {
    return await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (formData) => {
  try {
    const content = formData.get("content");
    // some validation here
    await prisma.task.create({
      data: {
        content,
      },
    });
    // revalidate path
    revalidatePath("/tasks");
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const createTaskCustom = async (prevState, formData) => {
       // await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second
    const content = formData.get("content");
    const Task = z.object({
        content: z.string().min(5),
    });
    console.log(content);
   
    try {
      // some validation here
      Task.parse({ content });
      await prisma.task.create({
        data: {
          content,
        },
      });
      // revalidate path
      revalidatePath("/tasks");
      return { message:'success'}
   
    } catch (error) {
        console.log(error);
      console.error("Error creating task:", error);
      return { message:'error'}
      throw error;
    }
  };


export const deleteTask = async (formData) => {
  try {
    const id = formData.get("id");
    await prisma.task.delete({
      where: { id },
    });
    revalidatePath("/tasks");
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const getTask = async (id) => {
  try {
    return await prisma.task.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

export const editTask = async (formData) => {
  try {
    const id = formData.get("id");
    const content = formData.get("content");
    const completed = formData.get("completed");

    await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        content: content,
        completed: completed === "on" ? true : false,
      },
    });
    // redirect won't work unless the component has 'use client'
    // another option, setup the editTask in the component directly
    redirect("/tasks");
  } catch (error) {
    console.error("Error editing task:", error);
    throw error;
  }
};
