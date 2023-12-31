import { Header } from '../components/Header'
import { SignIn } from '../components/SignIn'

export default function SignInPage(): JSX.Element {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <SignIn />
    </div>
  )
}
