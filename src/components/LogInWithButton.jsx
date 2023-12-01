const LogInWithButton = ({ src, alt }) => {
  return (
    <button className="hover:opacity-80">
      <img className='w-[88px] h-[64px] rounded' src={src} alt={alt} />
    </button>
  )
}
export default LogInWithButton
