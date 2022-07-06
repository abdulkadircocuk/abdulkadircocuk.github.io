/* ================= typing animation ================= */
var typed = new Typed(".typing", {
    strings:["","Web Designer","Web Developer","Graphic Designer","Software Development"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})

/* ================= Aside ================= */
const nav = document.querySelector(".nav"),
       navlist = nav.querySelector("li"),
         totalNavList = navlist.length;
        allSection = document.querySelectorAll(".section"),
       totalSection = allSection.length;
         for(let i=0; i<totalNavList; i++)
        {
             const a = navlist[j].querySelector("a");
            a.addEventListener("Click", function()
            {
               for(let i=0; i<totalSection; i++)
               {
                    allSection[i].classList.remove("back-section");
                }
                 for(let j=0; j<totalNavList; j++ )
                 {
                    if(navlist[j].querySelector("a").classList.remove("active")){
                         allSection[j].classList.add("back-section");
                    }
                }
                this.classList.add("active")
                 showSection(this);
                 if(window.innerWidth < 1200)
                 {
                    asideSectionTogglerBtn();
                 }
             })
        }

       function showSection(element)
       {
            for(let i=0; i<totalSection; i++)
            {
                 allSection[i].classList.remove("active");
             }
             const target = element.getAttribute("href").split("#")[1];
             document.querySelector("#" + target).classList.add("active")
        }

        const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () =>
        {
          asideSectionTogglerBtn();
        })

        function asideSectionTogglerBtn()
        {
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open");
          for(let i=0; i<totalSection; i++)
          {
               allSection[i].classList.toggle("open");
          }
        }
