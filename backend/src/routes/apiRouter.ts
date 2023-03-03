import { Router } from "express";
import { testRouter } from "./";

const router = Router();

router.use("/test", testRouter);

export const apiRouter = router;
