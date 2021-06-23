export const homeData = {
    title: `Harmony: Empowering Newark Residents with Smart and Inclusive Service Integration`,
    // markdown
    intro: `
##### Smart city services are deeply embedded in modern cities aiming to enhance various aspects of citizens&apos; lives. However, underlying expected or unexpected couplings among services due to complex interactions of social and physical activities are under-explored, which lead to potential conflicts. Using City of Newark in New Jersey as a testbed, this project aims to develop ways of reducing conflicts for ensuring social inclusion and equity of city services to achieve a "harmony" among various services.
`,
    updates: [
        {
        time: "11/20/2020",
        // markdown
        content:
            "Our project team met with Newark Chief Operating Officer Natasha Rogers.",
        },
        {
            time: "11/06/2020",
                content:
            "Our project team met with Newark IT Manager Sherronda Carroll and her team.",
        },
        {
            time: "10/27/2020",
                content:
            "Our project team met with Newark Senior Policy Advisor Shoshanna Page.",
        },
        {
            time: "09/09/2020",
                content:
            "Our project team met with Newark City Planning Officer Chris Watson.",
        },
        {
            time: "07/10/2020",
                content:
            "Our project is funded by [NSF](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1952096).",
        }],
    highlights: [
        "3 Years (10/2020 - 09/2023)",
        "$2.3 Million Budget",
        "4 Universities (Rutgers, UVA, SBU, UConn)",
        "7 Faculty (CS, Engineering, Policy)",
        "10+ PhD/master Students",
        "4 Industry and Non-Profit Collaborators",
        "Focused on City of Newark",
        "Working Directly with City Officials",
        "Potential Transferability to Other Cities",
        "Part of NSF Smart and Connected Community Program",
    ],
    // markdown
    objective: `
Develop a socially-aware conflict management theory called Harmony for City Service Integration with five components:

* Service Conflict Specification;
    
* Service Conflict Detection;
    
* Service Conflict Resolution;
    
* Service Conflict Prevention;
    
* Social Intervention for Tech Dissemination and Edu Outreach.
  
Implement Harmony by working with our partners in City of Newark, NJ.`,
    // markdown
    innovation: `
Grounded in social science where new insights were drawn from social data collection to build a consensus on service conflicts.

Materialized with a set of socially-informed technological merits for conflict specification, detection, resolution, and prevention.

Evaluated with both technological and social experiments.

Societal impacts are created through social interventions to inclusively and equitably benefit diverse stakeholders of service conflicts.`,
    videoHtml: // markdown and html
`<iframe width="100%" 
    height="100%" 
    src="https://www.youtube-nocookie.com/embed/ryHSMTRY2wM"
    title="YouTube video player" 
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
/>
`,
    imageDirectory: `/homepage_slideshow/`, // parent folder of images in `static` folder
    imageObjects: [
        {
            fileName: `slideshow1.webp`,
            desc: `City Services`,
        },
        {
            fileName: `slideshow2.webp`,
            desc: `ICCPS’21 Best Paper`,
        },
        {
            fileName: `slideshow3.webp`,
            desc: `Team Visiting City of Newark`,
        },
        {
            fileName: `slideshow4.webp`,
            desc: `Meeting with City of Newark`,
        },
    ],
    collaborators: {
        image_directory: "/collaborators/", // path in `static` folder of the project
        collaborator_list: [
            {
                name: "Rutgers University",
                icon_filename: "1_rutgers.svg",
                url: "https://rutgers.edu",
            },
            {
                name: "University of Virginia",
                icon_filename: "2_university_of_virginia.svg",
                url: "https://www.virginia.edu",
            },
            {
                name: "Stony Brook University",
                icon_filename: "3_stony_brook.svg",
                url: "https://www.stonybrook.edu",
            },
            {
                name: "University of Connecticut",
                icon_filename: "4_university_of_connecticut.svg",
                url: "https://uconn.edu",
            },
            {
                name: "City of Newark",
                icon_filename: "5_city_of_newark.svg",
                url: "https://www.newarknj.gov",
            },
            {
                name: "National Science Foundation",
                icon_filename: "6_nsf.svg",
                url: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1952096",
            },
        ],
    }
};