import { useAuth } from '@/context/AuthContext';
import UserOrdersGrid from '@/components/UserOrdersGrid';

export default function MyOrdersPage() {
  const { session, loading } = useAuth();

  if (loading) return <p className="text-center mt-10">Cargando sesión...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Mis compras</h1>
      {session ? (
        <UserOrdersGrid />
      ) : (
        <p className="text-center text-red-600 font-semibold">
          Debes iniciar sesión para ver tus compras.
        </p>
      )}
    </div>
  );
}

