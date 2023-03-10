import { useForm } from 'react-hook-form';

interface PersonContract {
  firstName: string;
  lastName?: string;
  email: string;
}

export function PersonForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PersonContract>();

  function onSubmitForm(e: PersonContract) {
    console.log(e);

    reset();
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-xl">Dados Cadastrais - Cliente</h1>

      <form
        name="person"
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full flex flex-col"
      >
        <label className="flex flex-col mb-4">
          Primeiro nome
          <input
            type="text"
            id="firstName"
            className="p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-400">Esse campo é obrigatório!</span>
          )}
        </label>

        <label className="flex flex-col mb-4">
          Último nome
          <input
            type="text"
            id="lastName"
            className="p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            {...register('lastName')}
          />
        </label>

        <label className="flex flex-col mb-4">
          E-mail
          <input
            type="email"
            id="email"
            placeholder="ex.: email@example.com"
            className="p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="text-red-400">Esse campo é obrigatório!</span>
          )}
        </label>

        <button
          className="w-[150px] bg-zinc-800 p-2 rounded-lg font-bold hover:bg-zinc-900 transition-colors"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
