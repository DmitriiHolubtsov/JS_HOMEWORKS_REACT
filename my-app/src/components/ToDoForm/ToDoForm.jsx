import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import styles from './ToDoForm.module.css';

const ToDoForm = ({ addTodo }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      status: 'pending'
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string(),
      status: Yup.string().required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      addTodo(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <TextField
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={formik.values.status}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.status && Boolean(formik.errors.status)}>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="not-completed">Not Completed</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" type="submit" fullWidth>
        Add Todo
      </Button>
    </form>
  );
};

export default ToDoForm;
