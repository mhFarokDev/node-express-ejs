import express from "express"
import { showHomePage, showContactPage, showAboutPage, showServicePage, showGuardPage} from "../middlewares/pageController.js"


const router = express.Router()


router.get("/", showHomePage)
router.get("/index", showHomePage)
router.get("/about", showAboutPage)
router.get("/service", showServicePage)
router.get("/guard", showGuardPage)
router.get("/contact", showContactPage)




export default router