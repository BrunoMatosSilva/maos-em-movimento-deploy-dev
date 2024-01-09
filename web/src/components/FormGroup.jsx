function FormGroup({children, error = null}) {
  return (
    <div className='flex flex-col gap-4'>
      {children}
      {error && <small className='text-danger-900 text-xs italic'>{error}</small>}
    </div>
  )
}

export default FormGroup