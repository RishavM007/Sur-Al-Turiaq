export type Menu = {
  id: number;
  title: (language: string) => string; // Function to handle dynamic title based on language
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
