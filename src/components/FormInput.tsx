import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  htmlFor: string;
  name: string;
  label: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  [x: string]: any;
}

const FormInput = ({
  htmlFor,
  name,
  label,
  register,
  registerOptions,
  ...props
}: FormInputProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className="py-2">
        {label}
      </label>
      <input
        type="text"
        id={htmlFor}
        className="px-2 md:py-4 border-2 rounded-md"
        {...register(name, registerOptions)}
        {...props}
      />
    </>
  );
};
export default FormInput;
