export const AllAppPages = (pathname: string, id: string) => {
  let page_name: string = "";
  switch (pathname) {
    case "/":
      page_name = "Contacts Page";
      break;

    case `/contact-detail/${id}`:
      page_name = "Contacts Detail Page";
      break;

    case "/graph-and-map":
      page_name = "Map and Charts Page";
      break;

    default:
      page_name = "";
      break;
  }
  return { page_name };
};
