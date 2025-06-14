import { useEffect, useState } from 'react';
import { getUserOrders } from '@/lib/orderService';
import { useAuth } from '@/context/AuthContext';

interface Order {
  id: string;
  created_at: string;
  listing: {
    card_name: string;
    image_url: string;
    price: number;
  };
}

export default function UserOrdersGrid() {
  const { session } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (!session) return;
  const fetchOrders = async () => {
    const { data, error } = await getUserOrders(session.user.id);
    console.log('🧾 Órdenes cargadas:', data);
    if (error) {
      console.error('Error al cargar compras:', error);
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };
  fetchOrders();
}, [session]);


  if (loading) return <p className="text-center mt-10">Cargando tus compras...</p>;

  if (orders.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Aún no has comprado ninguna carta.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {orders.map((order) => (
        <div key={order.id} className="border rounded shadow p-2 bg-white">
          {order.listing.image_url && (
            <img
              src={order.listing.image_url}
              alt={order.listing.card_name}
              className="mx-auto h-40 object-contain"
            />
          )}
          <h2 className="text-center mt-2 font-bold">{order.listing.card_name}</h2>
          <p className="text-center text-green-700 font-semibold">${order.listing.price}</p>
          <p className="text-center text-sm text-gray-500">
            Comprado el {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
