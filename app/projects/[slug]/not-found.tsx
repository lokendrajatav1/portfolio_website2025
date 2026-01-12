import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-12 py-24 flex items-center justify-center">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-semibold mb-4">Project not found</h1>
        <p className="text-muted-foreground mb-6">Sorry — the project you're looking for doesn't exist or has been removed.</p>
        <Link href="/portfolio" className="inline-block px-5 py-2 rounded-md bg-primary text-white font-medium">Back to portfolio</Link>
      </div>
    </main>
  )
}
