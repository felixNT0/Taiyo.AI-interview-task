import { ContactStatusEnum } from "../Enums/ContactStatusEnums";

export type ContactTypes = {
  first_name: string;
  last_name: string;
  id: string;
  contact_status: ContactStatusEnum | string;
  contact_index?: number;
};
