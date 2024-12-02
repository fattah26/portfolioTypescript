export const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className={`min-h-screen w-full max-w-6xl mx-auto grow p-7 md:p-0 ${className}`}>
      {children}
    </main>
  );
};