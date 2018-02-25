class localStorage {
  constructor() {
    this.location = {};
  }

  setItem(key, string) {
    this.location[key] = string;
  }

  getItem(key) {
    return this.location[key];
  }

  clear() {
    this.location = {};
  }
}

global.localStorage = new localStorage;