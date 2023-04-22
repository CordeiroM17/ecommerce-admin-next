import Layout from "@/components/Layout";
import Link from "next/link";

export default function products() {
    return (
        <Layout>
            <Link href={'/products/new'} className="bg-gray text-white p-1 px-2">Add new product</Link>
        </Layout>
    )
}