import { bootstrapMicroframework } from "microframework";
import { diLoader } from "../src/Loaders/DiLoader";
import { typeormLoader } from "../src/Loaders/TypeormLoader";
import { expressLoader } from "../src/Loaders/ExpressLoade";
import { homeLoader } from "../src/Loaders/HomeLoader";

bootstrapMicroframework({
    loaders: [
        diLoader,
        typeormLoader,
        expressLoader,
        homeLoader
    ]
}).then(()=>{console.log('App running.............')})