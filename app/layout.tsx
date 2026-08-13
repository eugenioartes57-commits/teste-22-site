import './globals.css';
export const metadata = { title: "Teste", description: 'Landing page gerada a partir do Figma' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
