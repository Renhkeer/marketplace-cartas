import { useAuth } from '@/context/AuthContext';
import SellCardForm from '@/components/SellCardForm';

export default function SellPage() {
  const { session, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Cargando sesión...</p>;

  return (
    <div className="p-6">
      {session ? (
        <SellCardForm />
      ) : (
        <p className="text-center text-red-600 font-semibold">
          Debes iniciar sesión para publicar cartas.
        </p>
      )}
    </div>
  );
}
