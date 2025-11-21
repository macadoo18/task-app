'use client';

import { Button, Callout, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

interface TaskForm {
  title: string;
  description: string;
}

const CreateTask = () => {
  const { register, control, handleSubmit } = useForm<TaskForm>();
  const router = useRouter();
  const [error, setError] = useState('');

  async function submitForm(data: TaskForm) {
    try {
      await axios.post('/api/tasks', data);
      router.push('/');
    } catch (err) {
      setError('An unexpected error occurred');
    }
  }

  return (
    <div className="max-w-lg m-auto">
      {error && <Callout.Root>{error}</Callout.Root>}

      <form
        className="space-y-3"
        onSubmit={handleSubmit(submitForm)}
      >
        <TextField.Root placeholder="Title" {...register('title')} />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <div className="text-center">
          <Button className="border m-2!">Create Task</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
