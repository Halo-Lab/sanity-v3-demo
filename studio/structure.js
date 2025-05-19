export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("blog").title("Blog"),
      S.documentTypeListItem("article").title("Article"),
      S.divider(),
      // S.documentTypeListItem("layout").title("Layout"),
      S.listItem()
      .title('Config')
      .child(
        S.document()
          .schemaType('config')
          .documentId('config')
          .title('Config'))
          
    ]);
