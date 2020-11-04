import { toast } from 'react-toastify';
import * as Yup from 'yup';

import api from '@app/services/api';

const schema = Yup.object().shape({
  channel: Yup.string().required().length(18),
  message: Yup.string().required().min(1).max(700),
});

export async function handleSwitch({ guild, refresh, type }, active) {
  try {
    await api
      .put(`guilds/${guild.id}/welcome/${type}`, { active })
      .then(() => refresh());
  } catch (e) {
    // Silent
  }
}

export async function handleSubmit(
  { guild, refresh, type },
  { channel, message },
  { formRef, setHasChanged, setFetch },
) {
  try {
    setFetch(true);
    formRef.current.setErrors({});

    await schema.validate({ channel, message }, { abortEarly: false });
    await api
      .put(`guilds/${guild.id}/welcome/${type}`, { channel, message })
      .then(() => refresh().then(() => setHasChanged(false)));
  } catch (err) {
    if (err instanceof Yup.ValidationError) {
      formRef.current.setErrors(
        err.inner.reduce(
          (obj, field) => Object.assign(obj, { [field.path]: field.message }),
          {},
        ),
      );
    } else {
      toast.error('Ocorreu um erro, tente novamente');
    }
  } finally {
    setFetch(false);
  }
}
