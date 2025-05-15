// components/ItemForm.tsx
import { useState } from 'react';

interface ItemFormProps {
  onAddItem: (item: { name: string; description: string; price: number }) => void;
}
export default function ItemForm({ onAddItem }: ItemFormProps) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !price) return;
    onAddItem({ name, description,price: parseFloat(price) });
    setName('');
    setDescription('');
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Item name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
       <input
        type="number"
        placeholder="Item price"
        className="w-full p-2 border rounded"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="w-full p-2 border rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Add Item
      </button>
    </form>
  );
}

