// import React from 'react';
// import prisma from '@/utils/db';
// import Link from 'next/link';
// import DeleteForm from './DeleteForm';

// const TaskList = async () => {
//   const tasks = await prisma.task.findMany({
//     orderBy: {
//       createdAt: 'desc',
//     },
//   });

//   if (tasks.length === 0) {
//     return <h2 className='mt-8 font-medium text-lg'>No tasks to show</h2>;
//   }

//   return (
//     <ul className='mt-8'>
//       {tasks.map((task) => (
//         <li
//           key={task.id}
//           className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
//         >
//           <h2
//             className={`text-lg capitalize ${
//               task.completed ? 'line-through' : ''
//             }`}
//           >
//              {task.content}
//           </h2>
//           <div className='flex gap-6 items-center'>
//             <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
//               edit
//             </Link>
//             <DeleteForm id={task.id} />
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

// "use client";

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import DeleteForm from './DeleteForm';
// import prisma from '@/utils/db';

// const fetchTasks = async () => {
//   return prisma.task.findMany({
//     orderBy: {
//       createdAt: 'desc',
//     },
//   });
// };

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const getTasks = async () => {
//       const fetchedTasks = await fetchTasks();
//       setTasks(fetchedTasks);
//     };

//     getTasks();
//   }, []);

//   if (tasks.length === 0) {
//     return <h2 className='mt-8 font-medium text-lg'>No tasks to show</h2>;
//   }

//   return (
//     <ul className='mt-8'>
//       {tasks.map((task) => (
//         <li
//           key={task.id}
//           className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
//         >
//           <h2
//             className={`text-lg capitalize ${
//               task.completed ? 'line-through' : ''
//             }`}
//           >
//             {task.content}
//           </h2>
//           <div className='flex gap-6 items-center'>
//             <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
//               edit
//             </Link>
//             <DeleteForm id={task.id} />
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TaskList;


"use client";

import React from 'react';
import Link from 'next/link';
import DeleteForm from './DeleteForm';

const TaskList = ({ tasks }) => {
  if (tasks.length === 0) {
    return <h2 className='mt-8 font-medium text-lg'>No tasks to show</h2>;
  }

  return (
    <ul className='mt-8'>
      {tasks.map((task) => (
        <li
          key={task.id}
          className='flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg'
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? 'line-through' : ''
            }`}
          >
            {task.content}
          </h2>
          <div className='flex gap-6 items-center'>
            <Link href={`/tasks/${task.id}`} className='btn btn-accent btn-xs'>
              edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
