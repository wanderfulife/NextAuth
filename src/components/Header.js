import { useSession, signIn, signOut } from "next-auth/react"

export default function Header() {
    const { data: session } = useSession()

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    return (
        <div className="header">
            {session ? (
                <button className="btn-signin" onClick={handleSignout}>
                    Sign out
                </button>
            ) : (
                <button className="btn-signin" onClick={handleSignin}>
                    Sign in
                </button>
            )}
        </div>
    )
}
