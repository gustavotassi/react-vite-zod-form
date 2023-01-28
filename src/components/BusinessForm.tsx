import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const businessFormSchema = z.object({
  businessName: z.string(),
  website: z.string().nullable(),
  taxId: z
    .string()
    .min(14, 'O tamanho mínimo para esse campo é de 14 caracteres!'),
});

type BusinessFormContract = z.infer<typeof businessFormSchema>;

export function BusinessForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessFormContract>({
    resolver: zodResolver(businessFormSchema),
  });

  function onSubmitForm(e: BusinessFormContract) {
    console.log(e);

    reset();
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-xl">Dados Cadastrais - Empresa</h1>

      <form
        name="business"
        onSubmit={handleSubmit(onSubmitForm)}
        className="w-full flex flex-col"
      >
        <label className="flex flex-col mb-4">
          Razão social
          <input
            type="text"
            id="businessName"
            className="p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            {...register('businessName', { required: true })}
          />
          {errors.businessName?.message && (
            <span className="text-red-400">Esse campo é obrigatório!</span>
          )}
        </label>

        <label className="flex flex-col mb-4">
          Website
          <input
            type="url"
            id="website"
            placeholder="ex.: https://mywebsite.com"
            className="p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            {...register('website')}
          />
        </label>

        <label className="flex flex-col mb-4">
          CNPJ
          <input
            type="text"
            id="taxId"
            placeholder="Apenas números!"
            className="p-3 rounded-lg bg-zinc-800 placeholder:text-zinc-400 focus:outline-none"
            {...register('taxId', { required: true })}
          />
          {errors.taxId?.message && (
            <span className="text-red-400">{errors.taxId?.message}</span>
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
