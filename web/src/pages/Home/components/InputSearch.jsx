export default function InputSearch({ value, onChange }){
  return (
    <div>
      <input
        className="w-full text-sm text-black md:text-base bg-white border-[1px] border-white rounded-[10px] h-[50px] shadow-md shadow-gray-300 outline-none px-4 transition delay-[0.1s] focus:border-[1px] focus:border-violet-900 placeholder:text-gray-400 "
        value={value}
        type="text"
        placeholder="pesquisar paciente..."
        onChange={onChange}
      />
    </div>
  );
}