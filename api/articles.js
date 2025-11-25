// Dados temporários dos artigos - SUBSTITUA quando encontrar o arquivo real
const artigosTemporarios = {
  articles: [
    {
      id: 1,
      title: "Direito do Consumidor - Guia Completo",
      slug: "direito-consumidor-guia-completo",
      category_id: 1,
      category_slug: "direito-do-consumidor",
      category_name: "Direito do Consumidor",
      excerpt: "Aprenda seus direitos como consumidor e como exercê-los",
      content: "Conteúdo completo sobre direito do consumidor...",
      featured: true,
      created_at: "2024-01-15T10:00:00Z"
    },
    {
      id: 2,
      title: "Rescisão Trabalhista - Como Calcular",
      slug: "rescisao-trabalhista-calculo",
      category_id: 2,
      category_slug: "direito-trabalhista",
      category_name: "Direito Trabalhista",
      excerpt: "Entenda como calcular sua rescisão trabalhista",
      content: "Guia completo para cálculo de rescisão...",
      featured: true,
      created_at: "2024-01-14T10:00:00Z"
    }
  ],
  categories: [
    {
      id: 1,
      name: "Direito do Consumidor",
      slug: "direito-do-consumidor",
      description: "Direitos e garantias do consumidor"
    },
    {
      id: 2,
      name: "Direito Trabalhista", 
      slug: "direito-trabalhista",
      description: "Direitos trabalhistas e relações de trabalho"
    }
  ]
};

export default function handler(request, response) {
  const { category, featured, recent, limit } = request.query;

  let articles = [...artigosTemporarios.articles];

  // Filtros
  if (category) {
    articles = articles.filter(article => 
      article.category_slug === category || article.category_id === parseInt(category)
    );
  }

  if (featured) {
    articles = articles.filter(article => article.featured);
  }

  if (recent) {
    articles = articles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  if (limit) {
    articles = articles.slice(0, parseInt(limit));
  }

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.status(200).json(articles);
}
