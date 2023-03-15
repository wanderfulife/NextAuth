import { signIn, getProviders, getSession } from "next-auth/react"

export default function CustomSignIn({ providers }) {
    return (
        <div>
            <h1>Welcome to your custom signIn page</h1>
            <stack>
                {Object.values(providers).map((provider) => {
                    return (
                        <div key={provider.name}>
                            <button onClick={() => signIn(provider.id)}>{provider.name}</button>
                        </div>
                    )
                })}
            </stack>
        </div>
    )
}

CustomSignIn.getInitialProps = async (context) => {
    const { req, res } = context
    const session = await getSession({ req })
    if (session) {
        res.writeHead(302, {
            location: "/",
        })
        res.end()
        return;
    }
    return {
        session: undefined,
        providers: await getProviders(context),
    }
}
