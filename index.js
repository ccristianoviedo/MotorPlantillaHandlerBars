const express= require("express")
const app = express();

const handlebars = require("express-handlebars");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "hbs"); // registra el motor de plantillas
app.set("views", "./views"); // especifica el directorio de vistas

const datos=[]

app.get("/", function (req, res) {
  res.render("main", {datos});
});
app.post('/', (req, res) => {
    datos.push(req.body)
  res.render("main", datos);
})

app.listen(8080, () => console.log("Server up"));