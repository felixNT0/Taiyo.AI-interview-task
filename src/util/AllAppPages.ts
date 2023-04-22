import { AppPageEnum } from "../Enums/AppPageEnum";

export const AllAppPages = (currentTab: AppPageEnum) => {
  let page_name: string = "";
  switch (currentTab) {
    case AppPageEnum.CONTACT_LIST_PAGE:
      page_name = "Contacts Page";
      break;

    case AppPageEnum.CONTACT_DETAIL_PAGE:
      page_name = "Contacts Detail Page";
      break;

    case AppPageEnum.CHART_AND_MAP_PAGE:
      page_name = "Map and Charts Page";
      break;

    default:
      page_name = "";
      break;
  }
  return { page_name };
};
