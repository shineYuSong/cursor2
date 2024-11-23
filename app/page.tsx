export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section id="about" className="py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">你好，我是 XXX 👋</h1>
          <p className="text-xl text-foreground/80 mb-8">
            一名全栈开发者，热爱创造有趣的数字产品。专注于 Web 开发和用户体验设计。
          </p>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="px-6 py-2 bg-foreground text-background rounded-full hover:bg-foreground/90"
            >
              联系我
            </a>
            <a 
              href="#projects" 
              className="px-6 py-2 border border-border rounded-full hover:bg-foreground/5"
            >
              查看作品
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-12">精选项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border border-border rounded-lg p-6 hover:border-foreground/20">
              <h3 className="text-xl font-bold mb-2">项目名称</h3>
              <p className="text-foreground/60 mb-4">项目描述...</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-foreground/5 rounded-full text-sm">Next.js</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <h2 className="text-3xl font-bold mb-12">最新博客</h2>
        <div className="space-y-8">
          {[1, 2, 3].map((item) => (
            <article key={item} className="border-b border-border pb-8">
              <h3 className="text-xl font-bold mb-2">博客标题</h3>
              <p className="text-foreground/60 mb-4">博客摘要...</p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-foreground/40">2024-01-01</span>
                <a href="#" className="text-sm hover:underline">阅读更多 →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-12">联系我</h2>
        <div className="max-w-xl">
          <p className="text-foreground/80 mb-8">
            如果你对我的工作感兴趣，或者想要讨论潜在的合作机会，欢迎随时联系我。
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="inline-block px-6 py-2 bg-foreground text-background rounded-full hover:bg-foreground/90"
          >
            发送邮件
          </a>
        </div>
      </section>
    </div>
  );
}
