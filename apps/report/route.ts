import { Router } from "express";
import { createInvoice, createService, getInvoice, getInvoiceItems, getService } from "./controller";

const router = Router();

router.post("/createInvoice", createInvoice);
router.post("/createService", createService);
router.get("/getInvoice", getInvoice);
router.get("/getService", getService);
router.get("/items/:invoiceId", getInvoiceItems);
// router.get("/:id", getInvoiceById);
// router.get("/:id", getInvoiceById);
// router.put("/:id", updateInvoice);
// router.delete("/:id", deleteInvoice);

export { router };
