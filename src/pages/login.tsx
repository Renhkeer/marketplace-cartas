import AuthForm from '@/components/AuthForm';
import { loginUser } from '@/lib/authService';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    const { error } = await loginUser(email, password);
    if (error) alert(error.message);
    else router.push('/');
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
