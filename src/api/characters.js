import { Get } from "../api";

export default class User {
  static GetCharacters(params) {
    return Get("/character", params);
  }

  static GetSingleCharacter(id) {
    return Get(`/character/${id}`);
  }
}
