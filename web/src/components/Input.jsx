import clsx from 'clsx'

function Input({
  label,
  id,
  type,
  required,
  register,
  errors,
  disabled,
  placeholder,
  onBlur
}){
 return (
  <div className='flex items-center gap-2'>
      <label
      htmlFor={id}
      className='text-sm leading-6 text-gray-900 font-semibold'
      >
        {label}
      </label>
      <div className='flex-1'>
        <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={register}
        autoComplete={id}
        disabled={disabled}
        {...register(id, { required })}
        onBlur={onBlur}
        className={clsx(`
        form-input w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6
        `,
        errors[id] && "focus:ring-rose-500",
        disabled && "opaciy-50 cursor-default"
        )}
        />
      </div>
    </div>
 )
}

export default Input