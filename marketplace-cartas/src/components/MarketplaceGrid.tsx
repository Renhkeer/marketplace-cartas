import { useEffect, useState } from 'react';
import { getAllListings } from '@/lib/listingService';
import { createOrder } from '@/lib/orderService';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

interface Listing {
  id: string;
  card_id: string;
  card_name: string;
  image_url: string;
  price: number;
  user_id: string;
}

export default function MarketplaceGrid() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchListings = async () => {
      const { data, error } = await getAllListings();
      if (error) {
        console.error('Error al cargar el marketplace', error);
      } else {
        setListings(data || []);
      }
      setLoading(false);
    };

    fetchListings();
  }, []);

  const handleBuy = async (listingId: string, cardName: string, ownerId: string) => {
    if (!session) {
      alert('Debes iniciar sesión para comprar');
      router.push('/login');
      return;
    }

    if (session.user.id === ownerId) {
      alert('No puedes comprar tu propia carta');
      return;
    }

    const { error } = await createOrder({
      user_id: session.user.id,
      listing_id: listingId,
    });

    if (error) {
      alert('Error al registrar la compra: ' + error.message);
    } else {
      alert(`¡Has comprado "${cardName}" exitosamente!`);
      // Opcional: recargar la página o actualizar el estado
      setListings((prev) => prev.filter((l) => l.id !== listingId));
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando cartas en venta...</p>;

  if (listings.length === 0) {
    return <p className="text-center mt-10 text-gray-600">No hay cartas en venta aún.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {listings.map((listing) => (
        <div key={listing.id} className="border rounded shadow p-3 bg-white">
          {listing.image_url && (
            <img
              src={listing.image_url}
              alt={listing.card_name}
              className="mx-auto h-40 object-contain"
            />
          )}
          <h2 className="text-center mt-2 font-bold">{listing.card_name}</h2>
          <p className="text-center text-green-700 font-semibold">${listing.price}</p>
          <button
            onClick={() => handleBuy(listing.id, listing.card_name, listing.user_id)}
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded"
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}
