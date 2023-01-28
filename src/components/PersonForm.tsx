import { FormEvent, useState } from 'react';

export function PersonForm() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function onSubmitForm(e: FormEvent) {
    e.preventDefault();

    console.log(firstName, lastName, email);
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-xl">Dados Cadastrais</h1>

      <form
        name="person"
        onSubmit={onSubmitForm}
        className="w-full flex flex-col"
      >
        <label htmlFor="firstName">Primeiro nome</label>
        <input
          type="text"
          id="firstName"
          className="p-3 rounded-lg bg-zinc-800 mb-4 placeholder:text-zinc-400 focus:outline-none"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Último nome</label>
        <input
          type="text"
          id="lastName"
          className="p-3 rounded-lg bg-zinc-800 mb-4 placeholder:text-zinc-400 focus:outline-none"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="firstName"
          placeholder="ex.: email@example.com"
          className="p-3 rounded-lg bg-zinc-800 mb-6 placeholder:text-zinc-400 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

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
