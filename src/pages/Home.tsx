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
    // Dados temporários - depois substituímos pela API real
    const tempArticles: Article[] = [
      {
        id: 1,
        title: "Direito do Consumidor - Guia Completo",
        slug: "direito-consumidor-guia-completo",
        category_name: "Direito do Consumidor",
        excerpt: "Aprenda seus direitos como consumidor e como exercê-los",
        featured: true
      },
      {
        id: 2,
        title: "Rescisão Trabalhista - Como Calcular",
        slug: "rescisao-trabalhista-calculo", 
        category_name: "Direito Trabalhista",
        excerpt: "Entenda como calcular sua rescisão trabalhista",
        featured: true
      },
      {
        id: 3,
        title: "Erro Médico - Seus Direitos",
        slug: "erro-medico-direitos",
        category_name: "Direito Médico",
        excerpt: "Saiba o que fazer em casos de erro médico",
        featured: true
      }
    ];

    setArticles(tempArticles);
    setLoading(false);
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
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-800">Desenrola Direito</h1>
          <p className="text-gray-600">Simplifique o conhecimento jurídico</p>
        </div>
      </header>

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
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Desenrola Direito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
