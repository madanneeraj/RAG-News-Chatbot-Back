import { v4 as uuidv4 } from "uuid";

export function getSessionId(sessionId) {
  return sessionId || uuidv4();
}
