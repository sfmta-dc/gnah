const pages = [
    {
        "name": "Automotive Service Worker – Meet Nicole Humphrey",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/automotive-service-worker ",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Contract Manager – Meet Katherine Kwok",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/contract-manager",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Engineer / Project Manager – Meet Becky Chen",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/engineer-project-manager",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Maintenance Machinist (Apprentice) – Meet Brittany McMartin",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/maintenance-machinist-apprentice",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Mechanic – Meet Jeena Villamor",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/mechanic-buses",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Mechanic – Jenny Keosaat",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/mechanic-historic-streetcars",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Parts Storekeeper – Meet Evelyn Cotton",
        "type": "section",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/parts-storekeeper",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Parts Storekeeper (Supervisor) -- Meet Deneitra Henry",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/parts-storekeeper-supervisor",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Power System Operator -- Meet ess Goldworthy",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/power-system-operator",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Transit Car Cleaner – Meet Trina Dixon",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/transit-car-cleaner",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    }
]

function main() {
    const currentPage = pages.find(page => page.url === window.location.href);
    const currentPageIndex = pages.findIndex(page => page.url === window.location.href);

    const findPreviousSection = (pages, startIndex) => {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (pages[i].type === 'section' | pages[i].type === 'home') {
                return pages[i];
            }
        }
        return null; // Return null if no section is found
    };
    const previousSection = findPreviousSection(pages, currentPageIndex);

    const findPreviousSectionBeforeParent = (pages, startIndex) => {
        // First, find the direct parent section or home for the startIndex
        let directParentIndex = -1;
        for (let i = startIndex; i >= 0; i--) {
            if (pages[i].type === 'section' || pages[i].type === 'home') {
                directParentIndex = i;
                break; // Stop at the first section or home found
            }
        }

        // Now, find the section or home before the direct parent
        for (let i = directParentIndex - 1; i >= 0; i--) {
            if (pages[i].type === 'section' || pages[i].type === 'home') {
                return pages[i];
            }
        }

        return null; // Return null if no previous section or home is found before the parent
    };
    const previousSectionBeforeParent = findPreviousSectionBeforeParent(pages, currentPageIndex);

    const findNextSection = (pages, startIndex) => {
        for (let i = startIndex + 1; i < pages.length; i++) {
            if (pages[i].type === 'section') {
                return pages[i];
            }
        }
        return null; // Return null if no section is found
    };
    const nextSection = findNextSection(pages, currentPageIndex);

    const findPreviousPage = (pages, startIndex) => {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (pages[i].type === "section") {
                return previousSectionBeforeParent;
            }
            if (pages[i].type === 'page') {
                return pages[i];
            }
            return null;
        }
    };
    const previousPage = findPreviousPage(pages, currentPageIndex);

    const findNextPage = (pages, startIndex) => {
        for (let i = startIndex + 1; i < pages.length; i++) {
            if (pages[i].type === "section") {
                return nextSection;
            }
            if (pages[i].type === 'page') {
                return pages[i];
            }
            return null;
        }
    };
    const nextPage = findNextPage(pages, currentPageIndex);

    // Breadcrumb functionality
    const breadcrumbOrderedList = document.querySelector('.breadcrumb');
    if (currentPage.type === 'section') {
        const newBreadcrumbItem = document.createElement('li');
        newBreadcrumbItem.innerHTML = `<a href="${currentPage['section-url']}">${currentPage['section-name']}</a>`;
        breadcrumbOrderedList.insertBefore(newBreadcrumbItem, breadcrumbOrderedList.childNodes[1]);
    }

    if (currentPage.type === 'page') {
        const newBreadcrumbItem = document.createElement('li');
        const newHomeItem = document.createElement('li');
        newBreadcrumbItem.innerHTML = `<a href="${currentPage['section-url']}">${currentPage['section-name']}</a>`;
        newHomeItem.innerHTML = `<a href="${previousSection['section-url']}">${previousSection['section-name']}</a>`;
        breadcrumbOrderedList.insertBefore(newBreadcrumbItem, breadcrumbOrderedList.childNodes[1]);
        if (previousSection['section-url'].length > 0 && previousSection['section-name'].length > 0) {
            breadcrumbOrderedList.insertBefore(newHomeItem, breadcrumbOrderedList.childNodes[1]);
        }
    }

    // Navigation functionality
    // if (currentPage.type === 'section') {
    //     const regionContentDiv = document.querySelector('.region-content');
    //     // console.log('Region Content Div:', regionContentDiv); // Log the region content DIV

    //     if (!regionContentDiv.querySelector('section')) {
    //         // console.log('No section found on this page');
    //     } else {
    //         // console.log('Previous Section for Navigation:', previousSection); // Log previous section before using
    //         // console.log('Next Section for Navigation:', nextSection); // Log next section before using
    //         const newSection = document.createElement('section');
    //         newSection.innerHTML = `
    //     <div style="display: flex; justify-content: space-between;">
    //         <a href="${previousSection.url}">${previousSection.type === 'home' ? 'Home' : 'Previous Section'}</a>
    //         ${nextSection ? `<a href="${nextSection.url}">Next Section</a>` : ''}
    //     </div>
    //     `;
    //         regionContentDiv.appendChild(newSection);
    //     }
    // }

    // if (currentPage.type === 'page') {
    //     const nodeArticle = document.querySelector('.node');
    //     // console.log('Node Article:', nodeArticle); // Log the node article

    //     if (!nodeArticle) {
    //         // console.log('No article found on this page');
    //     } else {
    //         const newSection = document.createElement('section');

    //         newSection.innerHTML = `
    //         <div style="display: flex; justify-content: space-between;">
    //             ${previousPage ? `<a href="${previousPage.url}">${previousPage.type === 'page' ? 'Previous Page' : 'Previous Section'}</a>` : '<a href="https://www.sfmta.com/accessibility-strategy-needs-assessment-2024">Back to Home</a>'}
    //             ${nextPage ? `<a href="${nextPage.url}">${nextPage.type === 'page' ? 'Next Page' : 'Next Section'}</a>` : '<a href="https://www.sfmta.com/accessibility-strategy-needs-assessment-2024">Back to Home</a>'}
    //         </div>
    //     `;
    //         nodeArticle.appendChild(newSection);
    //     }
    // }

    if (currentPage.type === 'page') {
        sidebar(currentPageIndex);
    }

    // if (currentPage.type === 'section') {
    //     //
    //     const asideElementStatus = document.querySelector('aside');
    //     if (asideElementStatus) {
    //         sidebar(currentPageIndex);
    //     } else {
    //         // create a const that finds a div with a class row which is inside a div with class main-container which is a direct child of the body element
    //         const rowDiv = document.body.querySelector('div.main-container > div.row');

    //         // find the section element which is the child of the row div
    //         const sectionElement = rowDiv.querySelector('section');

    //         // The section element will have a class name of col-sm-12. Remove that class and add a new one: col-sm-8
    //         sectionElement.classList.remove('col-sm-12');
    //         sectionElement.classList.add('col-sm-8');

    //         let newAside = document.createElement('aside');
    //         // add the class col-sm-4 to the aside element
    //         newAside.classList.add('col-sm-4');
    //         // add the role complementary to the aside element
    //         newAside.setAttribute('role', 'complementary');

    //         let newDivItem = document.createElement('div');
    //         // add the two classes "region region-sidebar-second" to the newDivItem
    //         newDivItem.classList.add('region', 'region-sidebar-second');

    //         // set the innerHTML of the newAside equal to the newDivItem
    //         // Since you want to append the div as an element and not HTML, we'll append the newDivItem as a child
    //         newAside.appendChild(newDivItem);

    //         // Add this new aside element inside the div row as a sibling to the sectionElement. The newAside comes just after the sectionElement.
    //         sectionElement.insertAdjacentElement('afterend', newAside);

    //         setTimeout(sidebar(currentPageIndex), 25);
    //     }

    // }

}

function sidebar(currentPageIndex) {
    const asideElement = document.querySelector('aside');
    // find a child DIV of this aside element. The DIV will have a class of "region region-sidebar-second"
    // remove it from the DOM
    if (asideElement) {
        const regionSidebarSecond = asideElement.querySelector('.region-sidebar-second');
        if (regionSidebarSecond) {
            asideElement.removeChild(regionSidebarSecond);
        }
    }
    let htmlString = '';

    for (let i = 1; i < pages.length; i++) {
        // create an li element
        let li = document.createElement('li');
        let a = document.createElement('a');

        // set margin-top and margin bottom to .75rem
        li.style.marginTop = '.75rem';
        li.style.marginBottom = '.75rem';

        a.href = pages[i].url;
        a.innerHTML = pages[i].name;

        if (currentPageIndex === i) {
            a.style.textDecoration = 'underline';
        }
        if (pages[i].type === 'page') {
            li.style.marginLeft = '2rem';
        }
        // set the innerHTML of the li equal to the a element
        li.innerHTML = a.outerHTML;
        // add this li to htmlString
        htmlString += li.outerHTML;
    }

    if (asideElement) {
        const newSection = document.createElement('section');
        newSection.innerHTML = `
                <h2 class="block-title">
                    <a id="heading-id-12iuiu42" style="color:white;" href="https://www.sfmta.com/accessibility-strategy-needs-assessment-2024">Accessibility Strategy Needs Assessment</a>
                </h2>
                <div class="view-content">
                    <ul style="list-style: none; padding-left:2rem;">
                    ${htmlString}
                    </ul>
                </div>
            `;
        asideElement.appendChild(newSection);
    }

    // create const with the direct parent of the aside element
    const asideParent = asideElement.parentElement;

    //add an ID to it of: custom-row-id-2376g3279
    asideParent.id = 'custom-row-id-2376g3279';

    //insert some custom css into a new <style> tag inside the <head> of the document
    const style = document.createElement('style');
    style.innerHTML = `
        #heading-id-12iuiu42 {
            color: white;
        }
        #heading-id-12iuiu42:hover {
            color: white;
        }

        #custom-row-id-2376g3279 section:first-of-type {
            position: relative!important;

        }
        #custom-row-id-2376g3279 aside:first-of-type {
            position: relative!important;
        }

        @media (min-width: 768px) {

            #custom-row-id-2376g3279 {
                display: flex;
                flex-wrap: wrap;
            }
            /*    #custom-row-id-2376g3279 > .col-sm-4[role="complementary"] {
                order: -1;
            } */
                
            #custom-row-id-2376g3279 > section:first-of-type {
                width: 66.6%!important;
            }
            
            #custom-row-id-2376g3279 > aside:first-of-type {
                width: 33.3%!important;
            }
            
        }

        @media (min-width: 992px) {
          }
        `
    document.head.appendChild(style);

}

// wait 1000 ms then run main function
// setTimeout(main, 200);
main();