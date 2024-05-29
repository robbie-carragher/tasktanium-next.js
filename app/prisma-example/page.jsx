// import prisma from '@/utils/db';
// import TaskList from '@/components/TaskList';

// const prismaHandlers = async () => {
//   console.log('prisma example');
//   // await prisma.task.create({
//   //   data: {
//   //     content: 'wake up',
//   //   },
//   // });
//   return prisma.task.findMany();
// };

// const PrismaExample = async () => {
//   const tasks = await prismaHandlers();
//   if (tasks.length === 0) {
//     return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
//   }

//   return (
//     <div>
//       <h1 className='text-7xl'>PrismaExample</h1>
//       {tasks.map((task) => {
//         return (
//           <h2 key={task.id} className='text-xl py-2'>
//             😬 {task.content}
//           </h2>
//         );
//       })}
//     </div>
//   );
// };
// export default PrismaExample;

// app/tasks/page.jsx
import React, { useEffect, useState } from 'react';
import prisma from '@/utils/db';
import TaskList from '@/components/TaskList';

const prismaHandlers = async () => {
  return prisma.task.findMany();
};

const PrismaExample = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await prismaHandlers();
      setTasks(fetchedTasks);
    };

    fetchTasks();
  }, []);

  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>;
  }

  return (
    <div>
      <h1 className='text-7xl'>PrismaExample</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default PrismaExample;
