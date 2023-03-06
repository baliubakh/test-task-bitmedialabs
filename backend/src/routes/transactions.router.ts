import { Router } from "express";
import { transactionsController } from "../controllers/transactions.controller";
import { checkJoiError } from "../middlewares/checkJoiErrors";
import { checkPage } from "../middlewares/checkPage";
import { checkRouteError } from "../middlewares/checkRouteError";
import { errorHandler } from "../middlewares/errorHandler";

const router = Router();

router.get(
  "/:page",
  checkPage,
  checkJoiError,
  checkRouteError,
  errorHandler(transactionsController.getTransactions)
);

router.post(
  "/load/recent/",
  errorHandler(transactionsController.getRecentTransaction)
);

export const transactionsRouter = router;
