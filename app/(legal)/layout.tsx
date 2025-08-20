export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-md">
            <div className="prose prose-lg dark:prose-invert max-w-none">
                 {children}
            </div>
        </div>
      </div>
    </div>
  );
}
