import Menu from "./menu"
import Play from './play'


export default function RootLayout({children}
    : {
        children: React.ReactNode
      }){
  return (
    <section className="flex">
        <aside className="w-1/4"><Menu/><Play/></aside>
        <main>{children}</main>
    </section>
  )
}

