export const prettifyUrl = (url: string) => {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "");
};
