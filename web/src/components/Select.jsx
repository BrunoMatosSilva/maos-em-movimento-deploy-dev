import ReactSelect from "react-select";

function Select ({label, value, onChange, onBlur, options, disabled }) {
  return(
    <div className="z-[100]">
      <label
      className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
        isDisabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        options={options}
        styles={{
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999
          })
        }}
        classNames={{
          control: () => "text-sm w-80"
        }}
        />
      </div>
    </div>
  )
}
export default Select;