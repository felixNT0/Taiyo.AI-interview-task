import { AppPageEnum } from "../Enums/AppPageEnum";
import ChartAndMapPage from "../Pages/ChartAndMapPage";
import ContactDetailPage from "../Pages/ContactDetailPage";
import ContactListPage from "../Pages/ContactListPage";

export const PageRoutes = (currentTab: AppPageEnum) => {
  let Components: any;
  switch (currentTab) {
    case AppPageEnum.CONTACT_LIST_PAGE:
      Components = ContactListPage;
      break;

    case AppPageEnum.CONTACT_DETAIL_PAGE:
      Components = ContactDetailPage;
      break;

    case AppPageEnum.CHART_AND_MAP_PAGE:
      Components = ChartAndMapPage;
      break;

    default:
      Components = "";
      break;
  }
  return { Components };
};
