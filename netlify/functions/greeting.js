exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || 'Visitante';
  return {
    statusCode: 200,
    body: `Olá, ${name}! Bem vindo ao Netlify Functions!`,
  };
}
