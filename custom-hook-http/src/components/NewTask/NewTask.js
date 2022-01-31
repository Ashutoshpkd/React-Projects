import { useCallback, useMemo, useState } from 'react';
import useHttp from '../../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {

  const applyData = useCallback(async (response) => {
    const data = await response.json();

    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  },[]);

  const requestObj = useMemo({
    url: 'https://custom-hook-1-default-rtdb.firebaseio.com/tasks.json',
    body: JSON.stringify({ text: taskText }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  }, []);

  const {isLoading, error, sendHttp } = useHttp(requestObj, applyData);

  const enterTaskHandler = async (taskText) => {
      sendHttp();
    };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
