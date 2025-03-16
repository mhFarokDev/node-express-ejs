

export const showHomePage = (req, res) =>{
    
    res.render("index", {pageClass : "home"})
}

export const showContactPage = (req, res) =>{
    
    res.render("contact",  {pageClass : "contact"})
}
export const showAboutPage = (req, res) =>{
    
    res.render("about", {pageClass : "about"})
}
export const showServicePage = (req, res) =>{
    
    res.render("service", {pageClass : "service"})
}
export const showGuardPage = (req, res) =>{
    
    res.render("guard", {pageClass : "guard"})
}