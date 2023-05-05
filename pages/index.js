import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data: session} = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between items-center">
        <h2 className="font-bold text-xl">
          Welcome, {session?.user?.name}
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black items-center rounded-lg">
          <img src={session?.user?.image} alt="" className="w-10 h-10 rounded-lg"/>
          <span className="py-1 px-2 font-bold">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  )
}
