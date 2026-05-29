exports.handler = async (event) => {
  try {
    const { q, apikey, max = 10, lang = "en" } = event.queryStringParameters || {};

    if (!q || !apikey) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing q or apikey parameter" }),
      };
    }

    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(q)}&lang=${lang}&max=${max}&apikey=${apikey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
