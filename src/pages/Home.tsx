import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  slug: string;
  category_name: string;
  excerpt: string;
  featured: boolean;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/articles?featured=true&limit=6')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar artigos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-800">Desenrola Direito</h1>
          <p className="text-gray-600">Simplifique o conhecimento jurídico</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <span className="text-sm text-blue-600 font-medium">{article.category_name}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                  Ler mais →
                </button>
              </div>
            ))}
          </div>
        </section>

        {articles.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Nenhum artigo encontrado</h2>
            <p className="text-gray-500">
              Os artigos serão carregados em breve. Estamos preparando o conteúdo.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Desenrola Direito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
