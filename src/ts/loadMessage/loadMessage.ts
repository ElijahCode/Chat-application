import { getMessagesList } from "../fireBaseMessagesAPI/fireBaseMessagesApi";
import { createActionGetMessagesList } from "../actionCreator/actionCreators";

export async function loadMessage(store): Promise<void> {
  const messages = await getMessagesList();
  store.dispatch(createActionGetMessagesList(messages));
}
