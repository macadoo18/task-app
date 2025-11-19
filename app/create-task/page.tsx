'use client';

import { Button, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';

interface TaskForm {
  title: string;
  description: string;
}

const CreateTask = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<TaskForm>();

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          await axios.post('/api/tasks', data);
          router.push('/')
        })}
        className="max-w-lg m-auto space-y-3"
      >
        <TextField.Root
          placeholder="Title"
          {...register('title')}
        ></TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <div className="text-center">
          <Button>Create Task</Button>
        </div>
      </form>
    </>
  );
};

export default CreateTask;
