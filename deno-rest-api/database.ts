import { generateId } from "./utils.ts";

interface Entry {
  longUrl: string;
  shortUrl: string;
  id: string;
}

export class Database {
  entries: Array<Entry>;

  constructor() {
    this.entries = [
      {
        longUrl: "http://google.com",
        shortUrl: "http://localhost:8000/abc",
        id: "abc",
      },
    ];
  }

  addLongUrl(longUrl: string) {
    const id = generateId();
    this.removeEntriesWithId(id);

    const entry = {
      longUrl: longUrl,
      shortUrl: `http://localhost:8000/${id}`,
      id: id,
    };
    this.entries.push(entry);

    return entry.shortUrl;
  }

  getEntries() {
    return this.entries;
  }

  getLongUrlWithId(id: string) {
    return this.entries.find((entry) => entry.id === id)?.longUrl;
  }

  removeEntriesWithId(id: string) {
    this.entries = this.entries.filter((entry) => entry.id !== id);
  }
}
