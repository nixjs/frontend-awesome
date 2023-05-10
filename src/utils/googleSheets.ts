import { GoogleSpreadsheet } from "google-spreadsheet";
import { Config } from "configs/env";
import {
  CategorySheets,
  TagsSheets,
  ReactSheets,
  ReactContentSheet,
  TypescriptSheet,
} from "types/googleSheets";

export function loadCreds(): Record<"private_key" | "client_email", string> {
  return {
    private_key: Config.GOOGLE_PRIVATE_KEY,
    client_email: Config.GOOGLE_CLIENT_MAIL,
  };
}

export function loadSheets() {
  return new GoogleSpreadsheet(Config.GOOGLE_SHEET_ID);
}

export async function loadCategory(
  doc: GoogleSpreadsheet
): Promise<CategorySheets[]> {
  const sheet = doc.sheetsById[Config.GOOGLE_SHEET_CATEGORY]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows(); // return the rows from the 1st sheet

  const data = rows.map(({ id, slug, name }) => {
    // return the data for each video (or whatever each row is in your sheet)
    return {
      id,
      slug,
      name,
    };
  });
  return data;
}
export async function loadTags(doc: GoogleSpreadsheet): Promise<TagsSheets[]> {
  const sheet = doc.sheetsById[Config.GOOGLE_SHEET_TAGS]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows(); // return the rows from the 1st sheet

  const data = rows.map(({ id, slug, name }) => {
    // return the data for each video (or whatever each row is in your sheet)
    return {
      id,
      slug,
      name,
    };
  });
  return data;
}
export async function loadCategoryReactSheet(
  doc: GoogleSpreadsheet
): Promise<ReactSheets[]> {
  const sheet = doc.sheetsById[Config.GOOGLE_SHEET_REACT]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows(); // return the rows from the 1st sheet
  const data = rows.map(({ id, category, slug, name, url }) => {
    // return the data for each video (or whatever each row is in your sheet)
    return {
      id,
      category,
      slug,
      name,
      url,
    };
  });
  return data;
}

export async function loadCategoryTypescriptSheet(
  doc: GoogleSpreadsheet
): Promise<TypescriptSheet[]> {
  const sheet = doc.sheetsById[Config.GOOGLE_SHEET_TYPESCRIPT]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows(); // return the rows from the 1st sheet
  const data = rows.map(({ id, category, slug, name, url }) => {
    // return the data for each video (or whatever each row is in your sheet)
    return {
      id,
      category,
      slug,
      name,
      url,
    };
  });
  return data;
}

export async function loadContentBySheetIdAndCategorySlug(
  type: "react" | "typescript",
  slug: string,
  doc: GoogleSpreadsheet
): Promise<ReactContentSheet[]> {
  let sheetId = Config.GOOGLE_SHEET_REACT_CONTENT;
  switch (type) {
    case "typescript":
      sheetId = Config.GOOGLE_SHEET_TYPESCRIPT_CONTENT;
      break;
    default:
      sheetId = Config.GOOGLE_SHEET_REACT_CONTENT;
      break;
  }
  const sheet = doc.sheetsById[Config.GOOGLE_SHEET_REACT_CONTENT]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  const rows = await sheet.getRows(); // return the rows from the 1st sheet
  const data = rows
    .map(
      ({
        id,
        slug,
        name,
        url,
        description,
        category,
        tags1,
        tags2,
        tags3,
        tags4,
        tags5,
      }) => {
        // return the data for each video (or whatever each row is in your sheet)
        return {
          id,
          slug,
          name,
          url,
          description,
          category,
          tags1,
          tags2,
          tags3,
          tags4,
          tags5,
        };
      }
    )
    .filter((f) => f.category === slug);
  return data;
}
