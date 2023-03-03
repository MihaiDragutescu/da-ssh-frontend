export type FilterType = {
  id: string;
  type: string;
  name: string;
};

export type CategoryType = {
  id: string;
  name: string;
  image: string;
};

export type CollectionType = {
  id: string;
  name: string;
  image: string;
  categories: CategoryType[];
};
