import * as Yup from 'yup';

export const createTaskForm = Yup.object({
  title: Yup.string()
    .min(2, 'Muy corto')
    .required('Campo obligatorio')
    .typeError('Sólo texto'),
  description: Yup.string()
    .min(2, 'Muy corto')
    .required('Campo obligatorio')
    .typeError('Sólo texto'),
  limit_date: Yup.date()
    .min(new Date(), 'No permitido')
    .required('Campo obligatorio')
    .typeError('Debe se una fecha'),
});
