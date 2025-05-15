// components/ItemList.tsx
interface Item {
  id: number;
  name: string;
  price:number;
  description: string;
}

export default function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">{item.name}</h3>
           <p className="text-gray-500">Price: ${item.price}</p>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
