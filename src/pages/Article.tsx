import { useRoute } from "wouter";

export default function Article() {
  const [match, params] = useRoute("/artigos/:slug");
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Artigo: {params?.slug}</h1>
        <p className="text-gray-600">Conteúdo do artigo será carregado em breve.</p>
      </div>
    </div>
  );
}
