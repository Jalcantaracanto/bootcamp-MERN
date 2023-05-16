const express = require("express");
const router = express.Router();

router.use("/api/users", require("./users"));
router.use("/api/companies", require("./company"));
router.use("/api/user/company", require("./userCompany"));

module.exports = router;




