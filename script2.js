const books = [ {
    "toyImg":"images/toys/toy7.png",  
    "name": "Red Fraggle",
    "collection": "FRAGGLE ROCK VEGETABLE CARS",
    "year": "1988",
    "price": "$6.00",
    "poster":"Poster",
    "url":"https://www.etsy.com/listing/127689822/fraggle-rock-vintage-toys-cars-1988?gpla=1&gao=1&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_e-toys_and_games-toys-pretend_play&utm_custom1=_k_Cj0KCQjw2PSvBhDjARIsAKc2cgM77CX5DagVQ-D9__MVkeXyo6TJx3KR-3rPmEL-PUuiruJCL8D7rvsaAr3xEALw_wcB_k_&utm_content=go_12574417893_119773314219_507852404365_pla-352859725846_c__127689822_110053840&utm_custom2=12574417893&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgM77CX5DagVQ-D9__MVkeXyo6TJx3KR-3rPmEL-PUuiruJCL8D7rvsaAr3xEALw_wcB&variation0=1447062697"
},
{
    "toyImg":"images/toys/toy32.png",  
    "name": "Mickey Mouse",
    "collection": "MICKEY'S BIRTHDAY LAND",
    "year":"1988",
    "price": "$5.90",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/133895975341?_trkparms=amclksrc%3DITM%26aid%3D1110025%26algo%3DHOMESPLICE.COMPOSITELISTINGS%26ao%3D1%26asc%3D262472%26meid%3D625edd59333841aa92c9d2b78d6a44ae%26pid%3D101506%26rk%3D10%26rkt%3D25%26sd%3D191760898951%26itm%3D133895975341%26pmt%3D0%26noa%3D1%26pg%3D4247815%26algv%3DAlgoIndex5SimRanker%26brand%3DMcDonald%2527s&_trksid=p4247815.c101506.m1851"
},
{
    "toyImg":"images/toys/toy21.png",  
    "name": "Caterpillar",
    "collection": "ERIC CARLE FINGER PUPPET",
    "year": "1996",
    "price": "$2.00",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/285062431751?itmmeta=01HSKX93T817ZN58MWT7C79TGH&hash=item425f0b8407:g:G~0AAOSwb8Zji7wC&itmprp=enc%3AAQAJAAAA0J8sP5OKzNP%2FFSD1cqohQV%2FcTjEtzuojFsIFvISYh0L931eY59XJJSmMbVX2EV8ojABcLU8mbLd%2FJUu8mkn8NFqKMAaNvLlhUMPszggYUXOVXFTG%2FXbZSnYHPUF9c5RDZEqjppGzYnZW87XBuWEjpf%2FBk1EqZdEYmgX7tGDMGufknM4rEXyq%2BSEzJJXKWkT3YlCvD%2FILlDWX%2F1ajCUS658PCP1UMk3GsR3JA2CHQ4H5LLKl1H6M66EPJ11255QDvUWmFFNArH4e2t7MMJywRgO8%3D%7Ctkp%3ABk9SR569pP3MYw"
},
{
    "toyImg":"images/toys/toy2.png",  
    "name": "Sheer Khan",
    "collection": "THE JUNGLE BOOK WIND UP TOYS",
    "year": "1989",
    "price": "$3.99",
    "poster":"Poster",
    "url":"https://www.ebay.com/itm/134237527879?itmmeta=01HSKXCCWQ1GCN4XF6JKMC4JQ9&hash=item1f412e1f47:g:mFcAAOSwSxhjJfLf&itmprp=enc%3AAQAJAAAA4CA6tvU7%2FOX98fkFCyv9tC3GLFykAV87bA5uhVYIu7h3dCrs43i%2FR%2FXrMGObMpDbSKukC%2BkvqFADgDvyhyCe3nRywiLKpC11uDtFx2%2FpUYi3oUmxFQYTuyYAJHN%2BC9vT5WAAviD%2BCWB8ZPOahBW8tQ5XJ%2FCtr8dIbES8hI7fbu4JNHPX0WFWBHb0Ead0wniixdmP1X3XkJYmEdBfI%2F9xaIADGr3pkSgmvpg2adReuTnHBEGLQoolu5JA%2FZO2Dod2uPDhvoiSaDAlxLAObx%2FEN2GTOxXj2tytXcBs7VdI%2Foy0%7Ctkp%3ABk9SR7rOsf3MYw"
},
{
    "toyImg":"images/toys/toy8.png",  
    "name": "Gobo Fraggle",
    "collection": "FRAGGLE ROCK VEGETABLE CARS",
    "year": "1988",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/127689822/fraggle-rock-vintage-toys-cars-1988?gpla=1&gao=1&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_e-toys_and_games-toys-pretend_play&utm_custom1=_k_Cj0KCQjw2PSvBhDjARIsAKc2cgM77CX5DagVQ-D9__MVkeXyo6TJx3KR-3rPmEL-PUuiruJCL8D7rvsaAr3xEALw_wcB_k_&utm_content=go_12574417893_119773314219_507852404365_pla-352859725846_c__127689822_110053840&utm_custom2=12574417893&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgM77CX5DagVQ-D9__MVkeXyo6TJx3KR-3rPmEL-PUuiruJCL8D7rvsaAr3xEALw_wcB&variation0=1447062697"
},
{
    "toyImg":"images/toys/toy13.png",  
    "name": "Charlie",
    "collection": "PEANUTS CHARLIE BROWN",
    "year": "1990",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/164768936/vintage-peanuts-charlie-brown-complete?click_key=9534d1a3510e297183a0899efaa2ccf36c5cdced%3A164768936&click_sum=c1aabab3&ref=related-1&variation0=1381039573"
},
{
    "toyImg":"images/toys/toy10.png",  
    "name": "Garfield & Scooter",
    "collection": "GARFIELD",
    "year": "1988",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/164842767/vintage-garfield-happy-meal-toys-1989?click_key=b26fe0b9b26106ddec94985f5e9034101d8ee30d%3A164842767&click_sum=ee58d4f4&ref=related-3&variation0=1449224963"
},
{
    "toyImg":"images/toys/toy11.png",  
    "name": "Baby Fozzie",
    "collection": "MUPPET BABIES",
    "year": "1987",
    "price": "$4.99",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/266723672177?itmmeta=01HSKXZNCGK1BB8F3BPF5P7FQF&hash=item3e19f84071:g:6CcAAOSw1uBl9hwP"
},
{
    "toyImg":"images/toys/toy4.png",  
    "name": "Cruella De Vil",
    "collection": "DISNEY 101 DALMATIANS",
    "year": "1990",
    "price": "$3.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1692800959/vintage-disney-toys-101-dalmatians-happy?click_key=e53082a82c0659a40630dd2887785eac5d197edc%3A1692800959&click_sum=adcddcba&ref=internal_similar_listing_bot-1&listing_id=1692800959&listing_slug=vintage-disney-toys-101-dalmatians-happy"
},
{
    "toyImg":"images/toys/toy15.png",  
    "name": "Ronald McDonald the Bear",
    "collection": "TEENIE BEANIE BABIES (BEARS) 25TH",
    "year": "2004",
    "price": "$8.50",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1698508359/ty-teenie-beanie-babies-happy-meal?gpla=1&gao=1&&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_d-toys_and_games-toys-stuffed_animals_and_plushies-other&utm_custom1=_k_Cj0KCQjw2PSvBhDjARIsAKc2cgPaADVeZfqnEicwgCys5ln1JR7ZABVeEL0BfSABOTvTnUSuOk39OPsaAjdNEALw_wcB_k_&utm_content=go_12560180294_126270838024_506995646849_pla-314760243326_c__1698508359_5339361097&utm_custom2=12560180294&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgPaADVeZfqnEicwgCys5ln1JR7ZABVeEL0BfSABOTvTnUSuOk39OPsaAjdNEALw_wcB"
},
{
    "toyImg":"images/toys/toy14.png",  
    "name": "Lucy",
    "collection": "PEANUTS CHARLIE BROWN",
    "year": "1990",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/164768936/vintage-peanuts-charlie-brown-complete?gpla=1&gao=1&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_e-toys_and_games-toys-other&utm_custom1=_k_Cj0KCQjw2PSvBhDjARIsAKc2cgOpPhhSTlRrUcchovArRYSJIELnRObON15s4vgWjIRadEohM1v8yQYaAhv9EALw_wcB_k_&utm_content=go_12574417893_119773303619_507852403606_pla-314535280500_c__164768936_110053840&utm_custom2=12574417893&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgOpPhhSTlRrUcchovArRYSJIELnRObON15s4vgWjIRadEohM1v8yQYaAhv9EALw_wcB&variation0=1362594376"
},
{
    "toyImg":"images/toys/toy24.png",  
    "name": "Miss Piggy",
    "collection": "MUPPET TREASURE ISLAND",
    "year": "1995",
    "price": "$4.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/829744972/vintage-muppets-happy-meal-toys-complete?click_key=64e14882f86e7f8fd17be1a0123f01111bd5e251%3A829744972&click_sum=e4bc2463&ref=related-2&variation0=2020434737"
},
{
    "toyImg":"images/toys/toy6.png",  
    "name": "Boober & Wembley Fraggle",
    "collection": "FRAGGLE ROCK VEGETABLE CARS",
    "year": "1988",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/127689822/fraggle-rock-vintage-toys-cars-1988?gpla=1&gao=1&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_e-toys_and_games-toys-pretend_play&utm_custom1=_k_Cj0KCQjw2PSvBhDjARIsAKc2cgN78ayW1ftU0fVOsD4P4c1DqYgcGFDW0WJd5Zsv50ecR7rfyclS8OEaArjUEALw_wcB_k_&utm_content=go_12574417893_119773314219_507852404365_pla-352859725846_c__127689822_110053840&utm_custom2=12574417893&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgN78ayW1ftU0fVOsD4P4c1DqYgcGFDW0WJd5Zsv50ecR7rfyclS8OEaArjUEALw_wcB&variation0=1433111994"
},
{
    "toyImg":"images/toys/toy12.png",  
    "name": "Jennifer Lauren Loose",
    "collection": "CABBAGE PATCH KIDS",
    "year": "1992",
    "price": "$5.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1200190471/mcdonalds-1992-cabbage-patch-kids-5?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=CABBAGE+PATCH+KIDS+happy+meal&ref=sr_gallery-1-4&sts=1&content_source=2d6b9fdaeb83916fe37808f744cc952e37a415e1%253A1200190471&organic_search_click=1&variation0=2524128638"
},
{
    "toyImg":"images/toys/toy5.png",  
    "name": "Baby Gonzo",
    "collection": "MUPPET BABIES",
    "year": "1986",
    "price": "$4.95",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/225737929944?itmmeta=01HSKYBC26KHCFF336AP98V300&hash=item348f0774d8:g:XW0AAOSwTBtlQ9~o"
},
{
    "toyImg":"images/toys/toy28.png",  
    "name": "Mulan",
    "collection": "DISNEY'S MULAN",
    "year": "1998",
    "price": "$5.99",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1660663215/disney-mulan-action-figure-toy-with?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mulan+mcdonald%26%23039%3Bs+toy&ref=sr_gallery-1-3&pro=1&sts=1&content_source=7a70ee2b48c0430e5d90dc25b91f2a8a5e02684b%253A1660663215&organic_search_click=1"
},
{
    "toyImg":"images/toys/toy17.png",  
    "name": "Mama",
    "collection": "BERENSTAIN BEAR",
    "year": "1987",
    "price": "$12.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1644515086/berenstain-bears-mcdonalds-happy-meal?click_key=309f469c6e499221baa424ac00cddb5945f8b00d%3A1644515086&click_sum=8183953e&ref=internal_similar_listing_bot-5&sts=1&listing_id=1644515086&listing_slug=berenstain-bears-mcdonalds-happy-meal&variation0=4224984323"
},
{
    "toyImg":"images/toys/toy22.png",  
    "name": "Babs Bunny",
    "collection": "TINY TOONS WACKY ROLLERS",
    "year": "1992",
    "price": "$4.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/767784989/vintage-tiny-toons-happy-meal-toys?click_key=b2280b92b96ef2180829b2af173baa0c648c3a6d%3A767784989&click_sum=3c7a8908&ref=related-5&variation0=1728651663"
},
{
    "toyImg":"images/toys/toy19.png",  
    "name": "Dopey & Sneezy",
    "collection": "SNOW WHITE & 7 DWARFS",
    "year": "1993",
    "price": "$7.99",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1308063093/lot-of-6-vintage-mcdonalds-happy-meal?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=mcdonalds+snow+white&ref=sr_gallery-1-4&content_source=ae0c375f7309dcdea5e6aa39434768b8281d2547%253A1308063093&organic_search_click=1"
},
{
    "toyImg":"images/toys/toy9.png",  
    "name": "Monkey Fraggle",
    "collection": "FRAGGLE ROCK VEGETABLE CARS",
    "year": "1988",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/127689822/fraggle-rock-vintage-toys-cars-1988?gpla=1&gao=1&utm_source=google&utm_medium=cpc&utm_campaign=shopping_us_e-toys_and_games-toys-pretend_play&utm_custom1=_k_Cj0KCQjw2PSvBhDjARIsAKc2cgN78ayW1ftU0fVOsD4P4c1DqYgcGFDW0WJd5Zsv50ecR7rfyclS8OEaArjUEALw_wcB_k_&utm_content=go_12574417893_119773314219_507852404365_pla-352859725846_c__127689822_110053840&utm_custom2=12574417893&gad_source=1&gclid=Cj0KCQjw2PSvBhDjARIsAKc2cgN78ayW1ftU0fVOsD4P4c1DqYgcGFDW0WJd5Zsv50ecR7rfyclS8OEaArjUEALw_wcB&variation0=1433111994"
},
{
    "toyImg":"images/toys/toy16.png",  
    "name": "Twilight Sparkle",
    "collection": "MY LITTLE PONY",
    "year": "2012",
    "price": "$17.99",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/395110240967?itmmeta=01HSKYMDPET1N4TX3WZ06H0YH8&hash=item5bfe67d2c7:g:FsMAAOSw6PRllOOV&itmprp=enc%3AAQAJAAAA0DREOjOxGpMk5EYg7fqz%2F4AIAVsqZFPD4zdEzj0s%2FQ%2F14hYU6V4dVjDJK650FWzzu%2BS05OEVSjfdrkuX6TarA0D9owNIxrqnFVCVEZ5%2BkY7susDcZW%2BXWuugod5p3d%2F24bkCFtFtKb%2B5C2v6ixtaWzfdgY%2BwASRLcHd8UTvDiWHy4di7sjsSVv54JdiMOibBllULee0AazvIaxqUgt0DjNGgi1LOcg5mJCWeaRz%2BrpgN%2BYo7hQC0MEjoCcet4xCXKv7z7gqN5pTewS3z9%2Bs%2B4Do%3D%7Ctkp%3ABFBMrNvR_sxj"
},
{
    "toyImg":"images/toys/toy.png",  
    "name": "Mimi Kristina",
    "collection": "CABBAGE PATCH KIDS",
    "year": "1994",
    "price": "$5.24",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1571192240/cabbage-patch-kids-toys-you-pick-vintage?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=CABBAGE+PATCH+KIDS+happy+meal&ref=sr_gallery-1-6&pro=1&sts=1&content_source=6aa25efec9453b31c650cf0ed0ac504610734653%253A1571192240&organic_search_click=1&variation0=3952388013"
},
{
    "toyImg":"images/toys/toy25.png",  
    "name": "Bambi",
    "collection": "BAMBI",
    "year": "1988",
    "price": "$6.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/164610422/bambi-toys-mcdonalds-happy-meal-complete?click_key=29129d48636338aeb14202730e0ba2df51dd3c87%3A164610422&click_sum=4a33107a&ref=related-4&variation0=1364653988"
},
{
    "toyImg":"images/toys/toy26.png",  
    "name": "Jumba",
    "collection": "LILO & STITCH",
    "year": "2002",
    "price": "$17.34",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1326826992/lilo-and-stitch-2001-mcdonalds-happy"
},
{
    "toyImg":"images/toys/toy27.png",  
    "name": "Lilo",
    "collection": "LILO & STITCH",
    "year": "2002",
    "price": "$19.96",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1341214286/disney-lilo-stitch-mcdonalds-figures?click_key=fa1dc1247a0319e8eb0923473257e08e3fab5c0f%3A1341214286&click_sum=8a1298ad&ref=landingpage_similar_listing_bot-3&pro=1&frs=1&listing_id=1341214286&listing_slug=disney-lilo-stitch-mcdonalds-figures"
},
{
    "toyImg":"images/toys/toy29.png",  
    "name": "Charlie",
    "collection": "ICE AGE 4-CONTINENTAL DRIFT",
    "year": "2012",
    "price": "$6.99",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/334340897008?itmmeta=01HSKYTY7ZN4J0QYEFEJVVZZ70&hash=item4dd84538f0:g:HNcAAOSwnyZhxN23&itmprp=enc%3AAQAJAAAAsOeWW0U4WisfZaCaDTER4edGzbGRyeR5gDDbN%2FpD%2FqQeVtd05AmWQiPbGT8BwyWHgwMnTlP3y2VUtTTQz%2BVR1DjBvF0HZMN2bBcM5052cCxhQmqGEoC0wVLcPX5Ad1seLnRG2up0gDSJJ6QQAV4Ho0fgENXfGzt6vRp2ou7uk0cZHcqnH9H1Ht3jLiMwTmaBfNtZOETtAkKwyrdNuoZxZfD5PolnMQmBngIVhkgDzz72%7Ctkp%3ABk9SR4Lk6_7MYw"
},
{
    "toyImg":"images/toys/toy23.png",  
    "name": "Scuttle",
    "collection": "LITTLE MERMAID",
    "year": "1997",
    "price": "$9.00",
    "poster":"Poster",
    "url": "https://www.ebay.com/itm/404877570051?itmmeta=01HSKYVXERP532T33T8B9WNCBD&hash=item5e44957003:g:HJ8AAOSwkgxl~a~m"
},
{
    "toyImg":"images/toys/toy3.png",  
    "name": "Pongo",
    "collection": "DISNEY 101 DALMATIANS",
    "year": "1990",
    "price": "$3.00",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1692800959/vintage-disney-toys-101-dalmatians-happy?click_key=e53082a82c0659a40630dd2887785eac5d197edc%3A1692800959&click_sum=adcddcba&ref=internal_similar_listing_bot-1&listing_id=1692800959&listing_slug=vintage-disney-toys-101-dalmatians-happy"
},
{
    "toyImg":"images/toys/toy31.png",  
    "name": "Koala",
    "collection": "TEENIE BEANIE BABIES",
    "year": "1998",
    "price": "$6.66",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1519805084/vintage-mcdonalds-ty-animal-teenie?click_key=71b3b2f7dafe375fcd11e4009caff06c14604f02%3A1519805084&click_sum=82836cf3&external=1&rec_type=cs&ref=pla_similar_listing_top-5&sts=1&variation0=3714700649"
},
{
    "toyImg":"images/toys/toy30.png",  
    "name": "Penguin",
    "collection": "TEENIE BEANIE BABIES",
    "year": "1998",
    "price": "$6.66",
    "poster":"Poster",
    "url": "https://www.etsy.com/listing/1519805084/vintage-mcdonalds-ty-animal-teenie?click_key=71b3b2f7dafe375fcd11e4009caff06c14604f02%3A1519805084&click_sum=82836cf3&external=1&rec_type=cs&ref=pla_similar_listing_top-5&sts=1&variation0=3714700649"
},
];


window.addEventListener('load', ()=>{
    init();
})

const init = function(){
    const bookShelf = document.getElementById("bookshelf");

    books.map(function(book){
        const bookItem = buildBookItem(book);
        bookShelf.innerHTML = bookShelf.innerHTML + bookItem;
    })
}


const buildBookItem = function(book){
    return `
    <div class="book-item">

        <div class="toy-grid">
            <img src=${book.toyImg}>
            <a href="${book.url}"><h2 class="name">${book.name}</h2></a>
            <p class="collection-name">${book.collection}</p>
            
            <div class="toy-info">
                <p>${book.year}</p>
                <p>${book.price}</p>
            </div>    
        </div>  

        <div class="poster">
            <p class="poster-text">${book.poster}</p>
        </div>
        
    </div>`
}