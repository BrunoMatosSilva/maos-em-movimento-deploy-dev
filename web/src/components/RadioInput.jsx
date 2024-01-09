export const RadioInput = ({ register, id, value, name }) => {
  return(
    <label 
      htmlFor={id}
      className="text-sm md:text-base"
    >
      <input
        {...register(name)}
        type="radio"
        value={value}
        id={id}
        className="mr-1"
        />
        {value}
      </label>
  )
}