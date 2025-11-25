import { useRoute } from "wouter";

export default function CategoryArticles() {
  const [match, params] = useRoute("/categorias/:slug");
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Categoria: {params?.slug}</h1>
        <p className="text-gray-600">Artigos da categoria serão carregados em breve.</p>
      </div>
    </div>
  );
}
