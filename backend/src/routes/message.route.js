import express from 'express';
const router = express();
router.get("/send", (req, res) => {
    res.send("message endpoint");
});
export default router;
//# sourceMappingURL=message.route.js.map