// app/layout.tsx
import './globals.css'; // Ensure Tailwind or global styles are imported

export const metadata = {
  title: 'TacticalReport App',
  description: 'Next.js frontend for Spring Boot API integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
