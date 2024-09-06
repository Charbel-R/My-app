export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features Products</h2>
      <p> some other featured products </p>
    </>
  );
}