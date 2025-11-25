const categories = [
  {
    id: 1,
    name: "Direito do Consumidor",
    slug: "direito-do-consumidor",
    description: "Direitos e garantias do consumidor",
    article_count: 5
  },
  {
    id: 2,
    name: "Direito Trabalhista",
    slug: "direito-trabalhista", 
    description: "Direitos trabalhistas e relações de trabalho",
    article_count: 4
  },
  {
    id: 3,
    name: "Direito Médico",
    slug: "direito-medico",
    description: "Direitos na área da saúde e medicina",
    article_count: 3
  }
];

export default function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.status(200).json(categories);
}
