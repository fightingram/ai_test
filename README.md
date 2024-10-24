# ai_test

## English Vocabulary App

This app helps users learn English vocabulary by providing example sentences based on their preferences.

### Features

- Input user preferences for topics like favorite manga, anime, movies, etc.
- Generate example sentences using the OpenAI API based on user preferences.
- Display example sentences along with their translations on the vocabulary details page.

### How to Input User Preferences

1. Open the app and navigate to the preferences section.
2. Enter your preferences for topics such as:
   - Favorite manga or anime
   - Favorite movies or TV shows
   - Comments from favorite celebrities
   - Lyrics from favorite songs
   - Anecdotes related to favorite topics
   - Topics from other fields you want to study (e.g., law, chemistry)
3. Save your preferences.

### Example of Using OpenAI API to Generate Example Sentences

The app uses the OpenAI API to generate example sentences based on user preferences. Here is a simplified example of how the API is used:

```javascript
const openai = require('openai');

async function generateExampleSentence(word, preferences) {
  const prompt = `Generate an example sentence using the word "${word}" related to the following preferences: ${preferences.join(', ')}`;
  const response = await openai.Completion.create({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 50,
  });
  return response.choices[0].text.trim();
}
```

### Vocabulary Details Page

When you click on a word in the vocabulary list, you will be taken to the vocabulary details page, which displays the following information:

- Translation of the word in your native language
- Pronunciation
- Example sentences generated based on your preferences
- Translation of the example sentences in your native language
