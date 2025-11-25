export default function handler(request, response) {
  response.status(200).json({
    status: "ok",
    message: "API do Desenrola Direito está funcionando!",
    timestamp: new Date().toISOString()
  });
}
