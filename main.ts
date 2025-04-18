// main.ts
import { express, dotenv } from "./deps.ts";
import { connectDB } from "./config/db.ts";
import routes from "./src/routes/centerlize.routes.ts";
import { setupTypesense } from "./config/typesenseSetup.ts";



dotenv.config();
await setupTypesense();await setupTypesense();

await connectDB();

const app = express();

app.use(express.json());
app.use("/api", routes);

const port = Deno.env.get("PORT") ;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
