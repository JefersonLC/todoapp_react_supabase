import * as Yup from 'yup';

export const taskValidator = Yup.object({
  title: Yup.string()
    .min(2, 'Muy corto')
    .required('Título obligatorio')
    .typeError('Sólo texto'),
  description: Yup.string()
    .min(2, 'Muy corto')
    .required('Descripción obligatoria')
    .typeError('Sólo texto'),
  limit_date: Yup.date()
    .min(new Date(), 'No permitido')
    .required('Fecha límite obligatoria')
    .typeError('Debe ser una fecha'),
});
