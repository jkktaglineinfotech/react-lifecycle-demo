export const tabsData = [
  { id: 1, name: "Tab 1", api: "Cat Facts" },
  { id: 2, name: "Tab 2", api: "Bored" },
  { id: 3, name: "Tab 3", api: "Jokes" },
  { id: 4, name: "Tab 4", api: "Random User" },
];

export const apiEndPoints = [
  { api: "Cat Facts", endPoint: process.env.REACT_APP_API_URL_1 },
  { api: "Bored", endPoint: process.env.REACT_APP_API_URL_2 },
  { api: "Jokes", endPoint: process.env.REACT_APP_API_URL_3 },
  { api: "Random User", endPoint: process.env.REACT_APP_API_URL_4 },
];

export const tabsFilter = [
  { urlEndPoint: "tab1", name: "Tab 1" },
  { urlEndPoint: "tab2", name: "Tab 2" },
  { urlEndPoint: "tab3", name: "Tab 3" },
  { urlEndPoint: "tab4", name: "Tab 4" },
];
