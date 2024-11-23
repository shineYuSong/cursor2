export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
      <div className="font-bold text-lg">你的名字</div>
      <div className="flex gap-6">
        <a href="#about" className="hover:text-foreground/80">关于</a>
        <a href="#projects" className="hover:text-foreground/80">项目</a>
        <a href="#blog" className="hover:text-foreground/80">博客</a>
        <a href="#contact" className="hover:text-foreground/80">联系</a>
      </div>
    </nav>
  )
} 