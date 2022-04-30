export interface MenuModel {
  category: string;
  menu: {
    [key: string]: {
      url: string;
    };
  };
}
