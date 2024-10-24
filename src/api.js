const axios = require('axios');

const OPENAI_API_KEY = 'your_openai_api_key';
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';

async function sendOpenAIRequest(prompt) {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        prompt: prompt,
        max_tokens: 50,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error sending request to OpenAI API:', error);
    throw new Error('Failed to generate example sentence');
  }
}

module.exports = {
  sendOpenAIRequest,
};
