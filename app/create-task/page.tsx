'use client';

import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';

const CreateTask = () => {
  return (
    <>
      <div className="max-w-lg m-auto space-y-3">
        <TextField.Root placeholder="Title"></TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Create Task</Button>
      </div>
    </>
  );
};

export default CreateTask;
