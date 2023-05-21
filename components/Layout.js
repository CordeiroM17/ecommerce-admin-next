import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react";
import Logo from "./Logo";
import Providers from "./Providers";

export default function Layout({children}) {

  const [showNav, setShowNav] = useState(false)
  const { data: session } = useSession();

  

  if (!session) {
    return (
      <Providers>
        <div className="w-screen h-screen flex justify-center items-center">
          <button className="bg-white p-2 px-4 rounded-lg" onClick={() => signIn('google')}>Login with Google</button>
        </div>
      </Providers>
    );
  }

  return (
    <Providers>
      <div className="min-h-screen">
        <div className="md:hidden flex items-center p-4 text-white">
          <button onClick={() => setShowNav(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <button onClick={() => setShowNav(false)} className={(showNav ? 'absolute' : 'hidden') + ' z-10 top-3 right-5 transition-all'} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-8 h-8"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex grow justify-center mr-4">
            <Logo />
          </div>
        </div>
        <div className="flex">
          <Nav show={showNav}/>
          <div className="bg-white flex-grow m-2 rounded-lg p-4">{children}</div>
        </div>
      </div>
    </Providers>
  );
}
