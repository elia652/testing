'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ItemList from '../../../components/ItemList';
import ItemForm from '../../../components/ItemForm';

interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState('');
  const router = useRouter();

const fetchItems = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/items`);
    if (!res.ok) throw new Error('Failed to fetch items');
    const data = await res.json();
    setItems(data);
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('An unexpected error occurred');
    }
  }
};

const handleAddItem = async (item: Omit<Item, 'id'>) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to add item');
    fetchItems();
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('An unexpected error occurred');
    }
  }
};


  useEffect(() => {
    if (localStorage.getItem('isAuthenticated') !== 'true') {
      router.push('/login');
    } else {
      fetchItems();
    }
  }, [router]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Items</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <ItemForm onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

