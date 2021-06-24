
import { useHistory } from 'react-router-dom'

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIcomImg from "../assets/images/google-icon.svg"

import { Button } from "../components/Button"


import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'

export function Home() {

    const history = useHistory()
    const { user, signInWithGoogle} = useAuth()

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }

    return (
        <div id="page-auth">

            <aside>
                <img src={illustrationImg} alt="perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIcomImg} alt="logo google"/>
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em sua sala</div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}