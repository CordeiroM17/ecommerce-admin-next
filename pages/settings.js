import Layout from "@/components/Layout";
import { useTheme } from "next-themes";

export default function settings() {

    const {theme, setTheme} = useTheme();

    return (
        <Layout>
            <div>the current theme is: {theme}</div>
            <button onClick={() => setTheme('light')} className="btn-primary">Change light mode</button>
            <button onClick={() => setTheme('dark')} className="btn-primary">Change dark mode</button>

        </Layout>
    )
}