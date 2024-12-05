export interface Feature {
  id: number;
  icon: string;
  title: (language: string) => string; // Function that takes `language` and returns a string
  description: (language: string) => string; // Function that takes `language` and returns a string
}
