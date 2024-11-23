export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的个人主页</h1>
        <p className="text-xl text-gray-600">
          我是一名开发者，热爱创造和分享
        </p>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">关于我</h2>
        <p className="text-gray-700">
          在这里介绍一下你自己...
        </p>
      </section>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">我的项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 这里可以添加项目卡片 */}
        </div>
      </section>
    </div>
  )
} 