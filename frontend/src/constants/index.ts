export const searchInitialValues = {
  blockNumber: 0,
  s: "",
  r: "",
  id: "",
};

export const searchOptionValues = [
  {
    id: 1,
    title: "Transaction ID",
    name: "id",
  },

  {
    id: 2,
    title: "Block Number",
    name: "blockNumber",
  },
  {
    id: 3,
    title: "Sender Address",
    name: "s",
  },
  {
    id: 4,
    title: "Recepient Address",
    name: "r",
  },
];

export const tableHeaderValues = [
  "Block number",
  "Transaction ID",
  "Sender address",
  "Recipient's address",
  "Block confirmations",
  "Date",
  "Value",
  "Transaction Fee",
];

export const amoutOfPages = 5;
