import Head from "next/head"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import { useSession } from "next-auth/react"

export default function Home() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    return (
        <div>
            <Head>
                <title>Toorist</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Header />
                <div>
                    {session ? (
                        <>
                            <div className={styles.container}>
                                <img src={session.user.image} alt="" className={styles.avatar} />
                                <p>Welcome, {session.user.name ?? session.user.email}</p>
                            </div>
                        </>
                    ) : null}
                </div>
            </main>
        </div>
    )
}
