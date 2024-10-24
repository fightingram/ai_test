const openai = require('openai');
const { getPreferences } = require('./preferences');

async function generateExampleSentence(word) {
  const preferences = getPreferences();
  const prompt = `Generate an example sentence using the word "${word}" related to the following preferences: ${preferences.join(', ')}`;
  const response = await openai.Completion.create({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 50,
  });
  return response.choices[0].text.trim();
}

async function getVocabularyDetails(word) {
  const exampleSentence = await generateExampleSentence(word);
  return {
    word: word,
    exampleSentence: exampleSentence,
  };
}

module.exports = {
  generateExampleSentence,
  getVocabularyDetails,
};
