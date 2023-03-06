import { Router } from "express";
import { transactionsRouter } from "./";

const router = Router();

router.use("/transactions", transactionsRouter);

export const apiRouter = router;
