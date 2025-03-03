import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "img2txt",
  description: "Image to text, fast.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-mono bg-gray-50 dark:bg-gray-950 text-black dark:text-white px-3 lg:px-10 py-4 lg:py-10 min-h-dvh flex flex-col`}
      >
        <h1 className="font-semibold text-center text-2xl bg-gradient-to-b dark:from-gray-50 dark:to-gray-200 from-gray-950 to-gray-800 bg-clip-text text-transparent select-none">
          img2txt (currently it&apos;s down due to credits are finish)
        </h1>

        <main className="grow flex flex-col lg:flex-row gap-6 py-4 lg:py-10">{children}</main>

        <footer className="lg:flex flex-row justify-between text-center text-sm dark:text-gray-400 text-gray-600 select-none">
          <p>
            <A href="https://naman-doshi.vercel.app">naman doshi</A>
          </p>
          <p>
            Built with <A href="https://sdk.vercel.ai">Vercel AI SDK</A> &{" "}
            <A href="https://claude.ai/">Claude</A>
          </p>
          <p>
            <A href="https://github.com/DoshiNaman/img2txt">code repo</A>
          </p>
        </footer>

        <Toaster richColors theme="system" />
        <Analytics />
      </body>
    </html>
  )
}

function A(props: any) {
  return <a {...props} className="text-black dark:text-white hover:underline" />
}