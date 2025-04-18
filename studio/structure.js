export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("blog").title("Blog"),
      S.divider(),
      S.documentTypeListItem("layout").title("Layout"),
    ]);
