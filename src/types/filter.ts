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

export type FeaturedCollectionType = {
  id: string;
  name: string;
  image: string;
  categories: CategoryType[];
};
