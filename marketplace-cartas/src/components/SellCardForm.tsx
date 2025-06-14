import { useState } from 'react';
import { createListing } from '@/lib/sellService';
import { useAuth } from '@/context/AuthContext';

export default function SellCardForm() {
  const { session } = useAuth();
  const [form, setForm] = useState({
    card_id: '',
    card_name: '',
    image_url: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return alert('Debes iniciar sesión');

    const priceNumber = parseFloat(form.price);
    if (isNaN(priceNumber)) return alert('Precio inválido');

    const { error } = await createListing({
      user_id: session.user.id,
      card_id: form.card_id,
      card_name: form.card_name,
      image_url: form.image_url,
      price: priceNumber,
    });

    if (error) {
      alert('Error al guardar carta en venta: ' + error.message);
    } else {
      alert('Carta publicada exitosamente');
      setForm({ card_id: '', card_name: '', image_url: '', price: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Publicar carta en venta</h2>
      <input
        name="card_id"
        placeholder="ID de la carta (ej. base1-4)"
        value={form.card_id}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        name="card_name"
        placeholder="Nombre"
        value={form.card_name}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
        required
      />
      <input
        name="image_url"
        placeholder="URL de imagen"
        value={form.image_url}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      />
      <input
        name="price"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        type="number"
        step="0.01"
        className="w-full border p-2 mb-4"
        required
      />
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
        Publicar carta
      </button>
    </form>
  );
}
