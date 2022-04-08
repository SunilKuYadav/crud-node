import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import app from "./app";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}  🚀`));
