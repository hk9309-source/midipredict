const STORAGE_KEY = 'midipredict.history';

export const loadHistory = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.error('Failed to load history', error);
    return [];
  }
};

export const saveHistory = (history) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save history', error);
  }
};

export const addHistoryRecord = (record) => {
  const existing = loadHistory();
  const updated = [record, ...existing];
  saveHistory(updated);
  return updated;
};
