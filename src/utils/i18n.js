import languageConfigure from "./lang.json"


const i18n=(keyword)=>{
    const lang=localStorage.getItem("lang")||"en";
    return languageConfigure[lang][keyword];
}

export default i18n