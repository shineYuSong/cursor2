import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "我的个人主页",
  description: "使用 Next.js 创建的个人网站",
  authors: [{ name: "你的名字" }],
  keywords: ["个人网站", "作品集", "博客"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
            {/* 这里可以添加导航栏组件 */}
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="border-t border-border/40">
            {/* 这里可以添加页脚组件 */}
          </footer>
        </div>
      </body>
    </html>
  )
} 