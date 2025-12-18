export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 blur-3xl animate-pulse" />
            <h1 className="relative font-serif text-4xl sm:text-5xl font-light text-foreground">
              Lokendra Jatav
            </h1>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 rounded-full bg-primary animate-bounce"></div>
        </div>

        <p className="text-lg font-light text-muted-foreground">
          Loading...
        </p>
      </div>
    </div>
  )
}