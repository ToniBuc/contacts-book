import { createAction, props } from "@ngrx/store";
import { Contact } from "./contact.model";

export const addContact = createAction(
    '[Contact] Add Contact',
    props<{contact: Contact}>()
);