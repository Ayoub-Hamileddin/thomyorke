import jsonfile from "jsonfile";
import moment from "moment";

const path = "./data.json";
const date = moment("2025-07-19").format();

const data = {
  date: date,
};

jsonfile.writeFile(path, data);
