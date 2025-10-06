import express, { Request, Response } from "express";
import prisma from "./prisma";

const app = express();
app.use(express.json());

// Root
app.get("/", async (req: Request, res: Response) => {
  console.log("Open API");
  res.send("Open API");
});

//Post
app.post("/create", async (req: Request, res: Response) => {
  try {
    const { OrderNumber, Name, Item, Quantity, Price, Subtotal } = req.body;
    const order = await prisma.orderCRUD.create({
      data: {
        OrderNumber,
        Name,
        Item,
        Quantity,
        Price,
        Subtotal,
      },
    });
    res.status(200).json({ message: "เพิ่มแล้ว" });
  } catch (error: any) {
    res.status(500).json({ error: "เพิ่มไม่ได้" });
  }
});

// Get all
app.get("/allorders", async (req: Request, res: Response) => {
  try {
    const orders = await prisma.orderCRUD.findMany();
    res.status(200).json(orders);
  } catch (error: any) {
    console.error("Prisma Error:", error);
    res.status(500).json({ error: "ข้อมูลไม่มาฮ่ะ" });
  }
});

//Get ID 
app.get("/order/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await prisma.orderCRUD.findUnique({
      where: { Id: id },
    });
    if (!order) {
      return res.status(404).json({ error: "ไม่มีข้อมูลนี้ฮ่ะ" });
    }
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: "เกิดไรขึ้นไม่รู้" });
  }
});

//del
app.delete("/del/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await prisma.orderCRUD.delete({
      where: { Id: id },
    });
    res.status(200).json({ message: "ลบไปละ" });
  } catch (error: any) {
    console.error("Prisma Error:", error);
    res.status(500).json({ error: "ลบไม่ได้อ่ะ" });
  }
});

//PUT
app.put("/up/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { OrderNumber, Name, Item, Quantity, Price, Subtotal } = req.body;
  if (!OrderNumber && !Name && !Item && Quantity === undefined && Price === undefined && Subtotal === undefined) {
    return res.status(400).json({ error: "ขอข้อมูลก่อน เดะ อัปเดตให้" });
  }
  try {
    const order = await prisma.orderCRUD.update({
      where: { Id: id },
      data: {
        ...(OrderNumber && { OrderNumber }),
        ...(Name && { Name }),
        ...(Item && { Item }),
        ...(Quantity !== undefined && { Quantity }),
        ...(Price !== undefined && { Price }),
        ...(Subtotal !== undefined && { Subtotal }),
      },
    });
    res.status(200).json({ message: "อัปเดตข้อมูลเรียบร้อย", order });
  } catch (error: any) {
    res.status(500).json({ error: "อัปเดตไม่ได้" });
  }
});

//Update status Put
app.put("/status/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { Status } = req.body;
  if (!Status) {
    return res.status(400).json({ error: "กรุณาส่ง Status ที่ต้องการอัปเดต" });
  }
  const validStatuses = ["Pending", "Completed", "Cancelled"];
  if (!validStatuses.includes(Status)) {
    return res.status(400).json({ error: "เลือก 3 อันนี้เท่านั้น Pending,Completed,Cancelled" });
  }
  try {
    const order = await prisma.orderCRUD.update({
      where: { Id: id },
      data: { Status },
    });
    res.status(200).json({ message: "อัปเดตแล้ว", order });
  } catch (error: any) {
    res.status(500).json({ error: "อัปเดตไม่ได้" });
  }
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`เปิดอยู่ Port นี้นะ -> กดด้านล่าง ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

