

export type Category = {
    id: number;
    name: string
  };
  
  export type CategoryId = Category['id'];
  
  // export type CategoryWithoutId = Omit<Category, 'id'>;
  