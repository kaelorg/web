import { toast } from 'react-toastify';
import * as Yup from 'yup';

import { vanityTimeOptions } from '@app/config/dashboard';
import api from '@app/services/api';

const schema = Yup.object().shape({
  id: Yup.string().required().length(18),
  role: Yup.string().required().length(18),
  time: Yup.number()
    .required()
    .equals(vanityTimeOptions.map(option => option.value)),
});

export async function handleSubmit(
  { guild, refresh, profile },
  { id, role, time },
  { formRef },
) {
  await schema.validate({ id, role, time }, { abortEarly: false });

  if (id === profile.id) {
    return formRef.current.setErrors({ id: 'This user is yourself' });
  }

  await api
    .post(`guilds/${guild.id}/vanity`, { role, time, user: id })
    .then(() => refresh());

  toast.success('Usuário adicionado com sucesso.');
}
