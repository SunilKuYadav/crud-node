import swaggerUi from "swagger-ui-express";

import app from "./app";
import swaggerDocument from "./swagger.json";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}  🚀`));
