interface Storage {
  getItem(key: string): unknown;
  setItem(key: string, value: unknown): void;
}

interface StorageDependencies {
  storage: Storage;
}

export class StorageService {
  storage: Storage;

  constructor({ storage = localStorage }: StorageDependencies) {
    this.storage = storage;
  }

  get(key: string): unknown {
    return this.storage.getItem(key);
  }

  set(key: string, value: unknown): void {
    this.storage.setItem(key, value);
  }
}

export class LocalStorageAdapter implements Storage {
  getItem(key: string): unknown {
    const serializedValue = localStorage.getItem(key);

    if (serializedValue === null) {
      return {};
    }

    const deserializedValue = JSON.parse(serializedValue);

    return deserializedValue;
  }

  setItem(key: string, value: unknown): void {
    const serializedValue = JSON.stringify(value);

    localStorage.setItem(key, serializedValue);
  }
}
