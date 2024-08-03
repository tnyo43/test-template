export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      group2 layout
      {children}
    </div>
  );
}
