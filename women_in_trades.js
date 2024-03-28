const pages = [
    {
        "name": "Automotive Service Worker – Meet Nicole Humphrey",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/automotive-service-worker",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/automotive_service_worker_nicolehumphrey_headerimage.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Contract Manager – Meet Katherine Kwok",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/contract-manager",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/analyst_kat_kwok_header_image.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Engineer / Project Manager – Meet Becky Chen",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/engineer-project-manager",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/engineer-project-manager-becky-chen-header.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Maintenance Machinist (Apprentice) – Meet Brittany McMartin",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/maintenance-machinist-apprentice",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/apprenticemachinist_brittanymcmartin_headerimage.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Mechanic – Meet Jeena Villamor",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/mechanic-buses",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/mechanic_jeena_villamor_header_image_0.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Mechanic – Jenny Keosaat",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/mechanic-historic-streetcars",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/mechanic_jenny_keosaat_header_image.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Parts Storekeeper – Meet Evelyn Cotton",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/parts-storekeeper",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/partsstorekeeper_evelyn_cotton_header_image.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Parts Storekeeper (Supervisor) -- Meet Deneitra Henry",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/parts-storekeeper-supervisor",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/partsstorekeepersupervisor_deneitrahenry_headerimage.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Power System Operator -- Meet ess Goldworthy",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/power-system-operator",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/powersystemoperator_essgoldworthy_headerimage.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    },
    {
        "name": "Transit Car Cleaner – Meet Trina Dixon",
        "type": "page",
        "url": "https://www.sfmta.com/sfmta-career-center/women-in-the-trades-sfmta/transit-car-cleaner",
        "img": "https://www.sfmta.com/sites/default/files/teaser-images/2024/03/transitcarcleaner_trina_dixon_-_header_image.jpg",
        "section-name": "Women in the Trades at Muni",
        "section-url": "https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields"
    }
]

function main() {
    const currentPage = pages.find(page => page.url === window.location.href);
    const currentPageIndex = pages.findIndex(page => page.url === window.location.href);

    // Breadcrumb functionality
    const breadcrumbOrderedList = document.querySelector('.breadcrumb');

    if (currentPage.type === 'page') {
        const newBreadcrumbItem = document.createElement('li');
        const newHomeItem = document.createElement('li');
        newBreadcrumbItem.innerHTML = `<a href="${currentPage['section-url']}">${currentPage['section-name']}</a>`;
        newHomeItem.innerHTML = `<a href="https://www.sfmta.com/sfmta-career-center">SFMTA Career Center</a>`;
        breadcrumbOrderedList.insertBefore(newBreadcrumbItem, breadcrumbOrderedList.childNodes[1]);
        breadcrumbOrderedList.insertBefore(newHomeItem, breadcrumbOrderedList.childNodes[1]);
    }

    if (currentPage.type === 'page') {
        sidebar(currentPageIndex);
    }
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
            li.style.marginLeft = '0rem';
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
                    <a id="heading-id-12iuiu42" style="color:white;" href="https://www.sfmta.com/blog/celebrate-women-trades-muni-and-learn-how-work-their-fields">Women in the Trades at Muni</a>
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

main();