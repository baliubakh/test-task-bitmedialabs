import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ test: "hello world!!!!!!!" });
});

export const testRouter = router;
