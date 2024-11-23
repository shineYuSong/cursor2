export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="text-sm text-foreground/60">
          © {new Date().getFullYear()} 你的名字. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/你的用户名" className="hover:text-foreground/80">
            GitHub
          </a>
          <a href="https://twitter.com/你的用户名" className="hover:text-foreground/80">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
} 