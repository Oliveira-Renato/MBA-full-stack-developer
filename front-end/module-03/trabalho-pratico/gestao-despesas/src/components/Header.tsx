import { Box } from '@mui/system';
import { Login } from './Login';

export function Header() {
  return (
    <Box sx={{
      display: 'flex',
      marginBottom: '32px',
      borderBottom: '1px solid rgb(244,244,244)'
    }}>
      <h1>Despesas</h1>
      <Box sx={{
        display: 'flex',
        flex: '1',
        flexDirection: 'collumn',
        alignItems: 'center',
        justifyContent: 'right',
        gap: '16px'
      }}>
        <span>Olá visitante</span>
        <Login />
      </Box>
    </Box>
  )
}