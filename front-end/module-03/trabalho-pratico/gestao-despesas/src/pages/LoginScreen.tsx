import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { signInEndpoint } from '../server/backend';
import { IUser } from '../types/types';

interface ILoginScreenProps {
  onSignIn: (user: IUser) => void;
}

export default function LoginScreen(props: ILoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()
    signInEndpoint(email.trim(), password.trim()).then(props.onSignIn, (e) =>
      setError("E-mail não encontrado ou senha incorreta")
    );
  }

  return (
    <Box>
      <form onSubmit={handleLogin}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            height: '600px'
          }}>
          <h2>Login</h2>
          <TextField sx={{
            width: '45%',
            minWidth: '250px'
          }}
            fullWidth name="email"
            label="E-mail"
            id="fullWidth"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <TextField sx={{
            width: '45%',
            minWidth: '250px'
          }}
            type="password"
            name="senha" fullWidth
            label="Senha"
            value={password}
            id="fullWidth"
            onChange={(evt) => setPassword(evt.target.value)} />

          {error && <Box sx={{
            backgroundColor: "rgb(253, 236, 234)",
            borderRadius: "4px",
            padding: "16px",
            margin: "16px 0",
          }}>{error}</Box>}

          <Button type="submit" sx={{
            padding: '8px 46px',
            marginTop: '12px'
          }} variant="contained">Entrar</Button>
        </Box>
      </form>
    </Box>
  );
}