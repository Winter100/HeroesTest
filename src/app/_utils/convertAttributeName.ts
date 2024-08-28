export const convertAttributeName = (attribute: string) => {
  switch (attribute) {
    case "name":
      return "이름";
    case "class":
      return "직업";
    case "gender":
      return "성별";
    case "level":
      return "레벨";
    case "guild":
      return "길드";
    default:
      return "";
  }
};
