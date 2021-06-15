export const studyData = [
    {
        study_title: "Case Study for Newark Services",
        contentList: [
            {
                title: "Service 1:  Street Cleaning Service",
                detail: `
* This is a case study of Newark Street Cleaning Service. 
* Our goal for this study is to find out 
    * which community suffers from delayed street cleaning services 
    * If this service has a conflict with other city services such as parking, events, construction, etc.
                `, // Markdown format
                image: null,
                embedHtml: `<iframe 
                                width="100%"
                                height="300px"
                                src="https://www.youtube.com/embed/Mezajng5w28" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen
                            ></iframe>`,
            },
            {
                title: "Service 2:  Citizen Engagement Service",
                detail: `
* This is a case study of Newark Connect, a citizen engagement tool for residents to report various issues found in the city.
* Our goal for this study is to find out
    * Spatial-temporal patterns of reported issues
    * How long it takes to acknowledge, assign, and address issues
    * Any conflicts emerged with other city services
                `, // Markdown format
                image: null,
                embedHtml: `<iframe
                              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock"
                              className="_3S5H9"
                              title="htmlComp-iframe"
                              name="htmlComp-iframe"
                              width="100%"
                              height="300px"
                              data-src=""
                              src="https://gy1211-wixsite-com.filesusr.com/html/f218d2_7bf0ae2044ddd934af42faa4c1a4b3ac.html"
                            ></iframe>`,
            },
            {
                title: "Service 3:  NewarkGo Bike & Scooter-Share",
                detail: `
* This is a case study of NewarkGo, a Bike & Scooter Share program.
* The goal of this study is to
    * Measure the Connectivity, Equity, Economic Development, Safety, Acceptance of these services
    * Investigate the potential integration and conflicts with other transportation services
                `, // Markdown format
                image: "study/study_3.webp", // location of the image in `project/static` folder.
                embedHtml: null,
            },
        ],
    }];