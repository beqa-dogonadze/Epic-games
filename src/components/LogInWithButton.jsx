const LogInWithButton = ({ src, alt }) => {
  return (
    <button className="hover:opacity-80">
      <img className='w-[80px] h-[60px] rounded' src={src} alt={alt} />
    </button>
  )
}
export default LogInWithButton
