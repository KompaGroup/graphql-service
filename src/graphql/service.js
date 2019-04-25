import moment from "moment";
import { Global } from "../models";

export const getBookGlobalHistory = async ({
  book,
  from,
  to,
  author,
  type
}) => {
  const query = {
    book,
    type,
    author,
    date: {
      $gte: from ? moment(from) : moment().startOf("day"),
      $lte: to ? moment(to) : moment().endOf("day")
    }
  };
  const histories = await Global.find(query)
    .sort({ date: -1 })
    .lean()
    .exec();
  return {
    book,
    histories
  };
};

export const getBookGlobalRealtime = async ({ books }) => {
  const listQuery = books.map(item => {
    return Global.findOne({ book: item }).sort({ updateAt: -1 });
  });

  const data = await Promise.all(listQuery);
  const result = data.filter(i => i);
  return { data: result };
};
