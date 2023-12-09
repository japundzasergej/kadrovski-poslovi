import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

interface FormProps {
  name: string;
  email: string;
  title: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormProps>();

  const [user, setUser] = useState<FormProps>({
    name: '',
    email: '',
    title: '',
    message: '',
  });

  const isDesktop = useMediaQuery('(min-width: 1040px)');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    setTimeout(() => {
      setUser({ name: '', email: '', title: '', message: '' });
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 font-tenor md:pl-2" id="contact">
      <article className="flex justify-center flex-col items-center">
        <h1 className="md:text-6xl text-4xl lg:pt-24 lg:pb-24 pb-4 md:pb-8">
          Контакт
        </h1>
        <form
          action="https://formspree.io/f/xbjvndqd"
          method="POST"
          target="_blank"
          className="flex flex-col text-2xl min-w-[90%] lg:min-w-[50%]"
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="on"
        >
          <label htmlFor="name" className="pb-2">
            Име
          </label>
          <input
            type="text"
            id="name"
            className="px-2 md:py-4 border-2 rounded-md"
            {...register('name', {
              required: true,
              minLength: 3,
            })}
            value={user.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-700 mt-2">
              {errors.name.type === 'required' && 'Ово поље је обавезно.'}
              {errors.name.type === 'minLength' &&
                'Име мора у себи садржати бар 3 слова.'}
            </p>
          )}
          <label htmlFor="email" className="py-2">
            И-мејл
          </label>
          <input
            type="text"
            id="email"
            className="md:py-4 border-2 rounded-md"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-700 mt-2">
              {errors.email.type === 'required' && 'Ово поље је обавезно.'}
              {errors.email.type === 'pattern' && 'Неодговарајући и-мејл.'}
            </p>
          )}
          <label htmlFor="title" className="py-2">
            Наслов поруке
          </label>
          <input
            type="title"
            className="md:py-4 border-2 rounded-md"
            {...register('title', {
              required: true,
            })}
            value={user.title}
            onChange={handleChange}
          />
          {errors.title && (
            <p className="text-red-700 mt-2">
              {errors.title.type === 'required' && 'Ово поље је обавезно.'}
            </p>
          )}
          <label htmlFor="msg" className="py-2">
            Порука
          </label>
          <textarea
            id="msg"
            rows={isDesktop ? 10 : 5}
            {...register('message', {
              required: true,
            })}
            value={user.message}
            onChange={handleChange}
            className="border-2 rounded-md resize-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-700 mt-2">
              {errors.message.type === 'required' && 'Ово поље је обавезно.'}
            </p>
          )}
          <button
            type="submit"
            className={`mt-12 bg-button py-2 md:py-[0.75rem] text-white rounded-3xl hover:opacity-90 transition duration-300 shadow-sm shadow-black ${
              isDesktop ? 'text-3xl' : 'md:text-3xl text-xl'
            }`}
            disabled={isSubmitting}
          >
            Пошаљи
          </button>
        </form>
      </article>
    </section>
  );
};
export default Contact;
