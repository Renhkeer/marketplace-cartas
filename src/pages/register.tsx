import AuthForm from '@/components/AuthForm';
import { registerUser } from '@/lib/authService';
import { useRouter } from 'next/router';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (email: string, password: string) => {
    const { error } = await registerUser(email, password);
    if (error) alert(error.message);
    else {
      alert('Registro exitoso');
      router.push('/');
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
}
