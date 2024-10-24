const fs = require('fs');
const path = require('path');

const preferencesFilePath = path.join(__dirname, 'preferences.json');

function savePreferences(preferences) {
  const data = JSON.stringify(preferences, null, 2);
  fs.writeFileSync(preferencesFilePath, data, 'utf8');
}

function getPreferences() {
  if (!fs.existsSync(preferencesFilePath)) {
    return [];
  }
  const data = fs.readFileSync(preferencesFilePath, 'utf8');
  return JSON.parse(data);
}

function validatePreferences(preferences) {
  if (!Array.isArray(preferences)) {
    throw new Error('Preferences should be an array');
  }
  preferences.forEach((preference) => {
    if (typeof preference !== 'string') {
      throw new Error('Each preference should be a string');
    }
  });
}

module.exports = {
  savePreferences,
  getPreferences,
  validatePreferences,
};
