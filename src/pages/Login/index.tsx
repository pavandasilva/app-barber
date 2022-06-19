import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
/* import Swal from 'sweetalert2' */
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Input, Button } from '../../components'
import Logo from '../../assets/imgs/logo_brasao.png'
import { Container, Inputs, RememberMe, Wrapper } from './styles'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<any>({})
  const [password, setPassword] = useState('')

  const [requesting, setRequesting] = useState(false)
  /* const routerHistory = useHistory() */

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      setError({})
      setRequesting(true)
    }, []
  )

  const handleCheckOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {

  }, [])

  const handleInputOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setError({})

    if (event.target.name === 'email') {
      setEmail(event.target.value)
    } else if (event.target.name === 'password') {
      setPassword(event.target.value)
    }
  }, [])

  return (
    <Wrapper>
      <Container>
        <form action="submit" onSubmit={onSubmit}>
          <div>
            <img src={Logo} alt="" />
            <span>Digite seu e-mail e senha</span>
          </div>
          <Inputs>
            <Input
              name="email"
              value={email}
              onChange={handleInputOnChange}
              startIcon={FaEnvelope}
              label="E-mail"
              placeholder="E-mail"
              error={error?.email}
              type="email"
            />
            <Input
              name="password"
              type="password"
              value={password}
              onChange={handleInputOnChange}
              startIcon={FaLock}
              label="Senha"
              placeholder="Senha"
              error={error?.password}
            />
            <RememberMe>
              <div>
                <input
                  type="checkbox"
                  onChange={handleCheckOnChange}
                />
                <span>Manter conectado</span>
              </div>

              <Link to="/esqueceu-senha">Esqueceu a senha? </Link>
            </RememberMe>
          </Inputs>
          <Button type="submit" showSpinner={requesting} mode="confirm">
            Entrar
          </Button>
        </form>
      </Container>
    </Wrapper>
  )
}
