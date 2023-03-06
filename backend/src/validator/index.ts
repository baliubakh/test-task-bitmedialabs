import joi from "joi";

export const checkTransaction = joi.object().keys({
  id: joi.string(),
  s: joi.string(),
  r: joi.string(),
  blockNumber: joi.number(),
  timestamp: joi.string(),
  value: joi.number(),
  gas: joi.number(),
});
