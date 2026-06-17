const PhotoStack = () => {
  return (
    <div className="relative w-60 h-60 md:w-80 md:h-80">
      <div className="absolute inset-0 w-full h-full bg-muted/60 rounded-lg border border-border -rotate-6" />
      <div className="absolute inset-0 w-full h-full bg-muted/80 rounded-lg border border-border rotate-6" />
      <img
        src="/me-1.jpeg"
        alt="Photo of me"
        className="absolute inset-0 w-full h-full object-cover rounded-lg border-2 border-background hover:scale-101 hover:rotate-3 transition-scale duration-300"
      />
    </div>
  )
}

export default PhotoStack