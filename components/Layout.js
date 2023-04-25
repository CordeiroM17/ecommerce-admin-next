import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {

  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="w-screen h-screen flex">
        <div className="text-center w-3/6 bg-blue-900 flex items-center justify-center">
          <img src="../public"/>
        </div>
        <div className="text-center w-3/6 bg-white flex items-center justify-center">
          <button className="bg-white p-2 px-4 rounded-lg" onClick={() => signIn('google')}>Login with Google</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav/>
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
    </div>
    
  );
}
