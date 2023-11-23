/********************************************************************************
 *                                                                              *
 *      Note:                                                                   *
 *                                                                              *
 *      This script was originally written and tested here, but it has          *
 *      been pasted over into the menu page since chrome was blocking           *
 *      this file by deeming it as untrusthworthy.                              *
 *                                                                              *
********************************************************************************/


/* Current section in the menu sidebar gets bolder

document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null, // default Value = null. Makes it the viewport
        threshold: 0, //default Value = 0. 0 to 1 in percentage of viewport
        rootMargin: "-49.9% 0px -49.9% 0px" //top right bottom left
    };
    let observer = new IntersectionObserver(beTouching, options);
    document.querySelectorAll('#menu_content div').forEach(h2 => {
        observer.observe(h2);
        console.log("watching", h2.textContent);
    });
});

function removeStyles() {
    var section_HotPies = document.getElementById("menu_sidebar_HotPies");
    var section_FrozenPies = document.getElementById("menu_sidebar_FrozenPies");
    var section_FrozenPies = document.getElementById("menu_sidebar_FrozenPies_daily");
    var section_FrozenPies = document.getElementById("menu_sidebar_FrozenPies_weekly");
    var section_FrozenPies = document.getElementById("menu_sidebar_FrozenPies_monthly");
    var section_MiniPies = document.getElementById("menu_sidebar_MiniPies");
    var section_Sides = document.getElementById("menu_sidebar_Sides");
    var section_Desserts = document.getElementById("menu_sidebar_Desserts");

    if (document.getElementById("menu_sidebar_HotPies").classList.contains("menu_sectionIsVisible")) {
        document.getElementById("menu_sidebar_HotPies").classList.remove("menu_sectionIsVisible");
    }
    if (document.getElementById("menu_sidebar_FrozenPies").classList.contains("menu_sectionIsVisible")) {
        document.getElementById("menu_sidebar_FrozenPies").classList.remove("menu_sectionIsVisible");
        if (document.getElementById("menu_sidebar_FrozenPies_daily").classList.contains("menu_sectionIsVisible")) {
            document.getElementById("menu_sidebar_FrozenPies_daily").classList.remove("menu_sectionIsVisible");
        }
        else if (document.getElementById("menu_sidebar_FrozenPies_weekly").classList.contains("menu_sectionIsVisible")) {
            document.getElementById("menu_sidebar_FrozenPies_weekly").classList.remove("menu_sectionIsVisible");
        }
        else if (document.getElementById("menu_sidebar_FrozenPies_monthly").classList.contains("menu_sectionIsVisible")) {
            document.getElementById("menu_sidebar_FrozenPies_monthly").classList.remove("menu_sectionIsVisible");
        }
    }
    if (document.getElementById("menu_sidebar_MiniPies").classList.contains("menu_sectionIsVisible")) {
        document.getElementById("menu_sidebar_MiniPies").classList.remove("menu_sectionIsVisible");
    }
    if (document.getElementById("menu_sidebar_Sides").classList.contains("menu_sectionIsVisible")) {
        document.getElementById("menu_sidebar_Sides").classList.remove("menu_sectionIsVisible");
    }
    if (document.getElementById("menu_sidebar_Desserts").classList.contains("menu_sectionIsVisible")) {
        document.getElementById("menu_sidebar_Desserts").classList.remove("menu_sectionIsVisible");
    }
}

function beTouching(entries){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            switch(entry.target.id) {
                case "HotPies":
                    removeStyles();
                    document.getElementById("menu_sidebar_HotPies").classList.add("menu_sectionIsVisible");
                    break;
                case "FrozenPies":
                    removeStyles();
                    document.getElementById("menu_sidebar_FrozenPies").classList.add("menu_sectionIsVisible");
                    document.getElementById("menu_sidebar_FrozenPies_daily").classList.add("menu_sectionIsVisible");
                    break;
                case "FrozenPies_weekly":
                    removeStyles();
                    document.getElementById("menu_sidebar_FrozenPies").classList.add("menu_sectionIsVisible");
                    document.getElementById("menu_sidebar_FrozenPies_weekly").classList.add("menu_sectionIsVisible");
                    break;
                case "FrozenPies_monthly":
                    removeStyles();
                    document.getElementById("menu_sidebar_FrozenPies").classList.add("menu_sectionIsVisible");
                    document.getElementById("menu_sidebar_FrozenPies_monthly").classList.add("menu_sectionIsVisible");
                    break;
                case "MiniPies":
                    removeStyles();
                    document.getElementById("menu_sidebar_MiniPies").classList.add("menu_sectionIsVisible");
                    break;
                case "Sides":
                    removeStyles();
                    document.getElementById("menu_sidebar_Sides").classList.add("menu_sectionIsVisible");
                    break;
                case "Desserts":
                    removeStyles();
                    document.getElementById("menu_sidebar_Desserts").classList.add("menu_sectionIsVisible");
                    break;
                default:
                  // code block
            }
        }
    });
} */