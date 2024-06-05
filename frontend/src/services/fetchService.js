const API_BASE_URL = 'http://localhost:5000';

const fetchService = {

  // basic fetch function. TODO: pass typed in letters to filter result server side
  fetchPhoneBookEntries: async (query) => {
    try {
      const response = await fetch(`${API_BASE_URL}/search?name=${query}`);
      if (!response.ok) {
        throw new Error('Bad network response');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error appropriately
      throw error;
    }
  },

  mockFetchPhoneBookEntries: (query) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
              { "id": 1, "name": "Harper-Rose Lennon", "phone": "0171/24984023" },
              { "id": 2, "name": "Lloyd Mitchell", "phone": "0171/14294053" },
              { "id": 3, "name": "Aminah Sheldon", "phone": "0176/33581541" },
              { "id": 4, "name": "Skylah Gibbons", "phone": "0176/30053109" },
              { "id": 5, "name": "Owen Wilkes", "phone": "0176/52364266" },
              { "id": 6, "name": "Kajol Carty", "phone": "0176/23200162" },
              { "id": 7, "name": "Mohammod Finch", "phone": "0171/30608407" },
              { "id": 8, "name": "Khaleesi Randolph", "phone": "0171/75813522" },
              { "id": 9, "name": "Bryan Rankin", "phone": "0171/38068474" },
              { "id": 10, "name": "Luke Masonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn", "phone": "0176/47664269" },
              { "id": 11, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 12, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 13, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 14, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 15, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 16, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 17, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 18, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 19, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 20, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 21, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 22, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 23, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 24, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 25, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 26, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 27, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 28, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 29, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 30, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 31, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 32, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 33, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 34, "name": "Luke Mason", "phone": "0176/47664269" },
              { "id": 35, "name": "Luke Mason", "phone": "0176/47664269" },
            ];
            var filtered = data.filter(entry => entry.name.includes(query))
            resolve({ json: () => Promise.resolve(filtered) });
        }, 100); // simulate network delay
    });
}
};

export default fetchService;
