let featuredMomentsDiv = document.getElementById('featured-grid')
let featuredProjectsDiv = document.getElementById('projects-grid')
let featuredTeamDiv = document.getElementById('team-grid')

const moments = [
    {
        image: "./inages/pexels-ali-pazani-2613260.jpg",
        title: "WIDE BRIM HAT"
    },
    {
        image: "./inages/pexels-jonas-togo-3072141.jpg",
        title: "OSCAR WILDE"
    },
    {
        image: "./inages/pexels-simon-robben-977796.jpg",
        title: "LOOK! A BIRD"
    },
    {
        image: "./inages/pexels-kira-schwarz-9169378.jpg",
        title: "BUBBLES!"
    },
    {
        image: "./inages/pexels-maksim-goncharenok-5046542.jpg",
        title: "CHAMPAGNE POPPY"
    },
    {
        image: "./inages/pexels-eberhard-grossgasteiger-4406335.jpg",
        title: "ERUPTION"
    },
    {
        image: "./inages/pexels-suliman-sallehi-1484771.jpg",
        title: "BOND. JAMES BOND"
    },
    {
        image: "./inages/pexels-nataliya-vaitkevich-5712923.jpg",
        title: "1327 STEPS"
    },
    {
        image: "./inages/pexels-a-koolshooter-5601107.jpg",
        title: "DIOR"
    },
]

const projects = [
    {
        image: "./inages/pexels-igor-ovsyannykov-205961.jpg",
        title: "ALEXANDERS CAFE",
        subtitle: "Local pastry shop & bakery",
        text: "One of your news clients that we have truley enjoyed working with is none other than Alexanders Cafe. It is a local shop that recently opened in the beautiful Laguna Beach, CA. We are working with Alexander to create digital content for his website and social media."
    },
    {
        image: "./inages/pexels-cottonbro-4829079.jpg",
        title: "COTTON BROS COFFEE",
        subtitle: "Coffee bean roastery",
        text: "There is is nothing better in life than waking up to the smell of a freshly brewed cup of flavorful coffee. Being a long term client of ours, we currently create most of the content and media for their social media. We are currently working on a short documentary style video that encompasses their entire process and brand."
    },
    {
        image: "./inages/pexels-pavel-danilyuk-6461324.jpg",
        title: "EILIE CLOTHING",
        subtitle: "Womens clothing brand",
        text: "A friend of Omar launched a clothing brand in August 2021. From the samples to production to finding models and photos shoots, we created almost all of the content for the brand that you see today. We have a close working relationship and currently planning out thier mid-season winter collection drop. "
    },
]

const members = [
    {
        image: "./inages/IMG_9266.JPG",
        name: "OMAR JANDALI",
        position: "President & CEO",
        description: "My career started as a real estate photographer and videographer. I spent most of my 3 year career shooting luxury real estate in NorCal and SoCal. After a few years, I wanted to advance my career in a big way. I decided launch and build Parallaxis Media. "
    },
    {
        image: "./inages/pexels-sinitta-leunen-6652928.jpg",
        name: "ZACK MORRIS",
        position: "Photographer/Videographer",
        description: "I am currently a portrait and landscape photographer and videographer. I have had a short but yeailding career. I started just taking photos and videos that I posted on my social media account. I got a pretty big following and then decided to join parallaxis media. "
    },
    {
        image: "./inages/pexels-andrea-piacquadio-774909.jp",
        name: "ASHLEY GALLOWS",
        position: "Photographer/Videographer",
        description: "As a part time real estate agent, real estate is a passion of mine. with that being said, I naturally got curious and started building my real estate photography and videography career. It is a new found passion of mine that I am currently building and developing."
    },
    {
        image: "./inages/pexels-yogendra-singh-3748221.jpg",
        name: "BLACK MARLOW",
        position: "Editor",
        description: "While photography and videography is find and exciting for most, I love the other side of things. For the past few years, I have been editing photos and videos for all type of clients and friends. From product videos, real estate photos, portait images, and more. "
    },
]

function CreateFeaturedGridItem(){
    for(let i = 0; i < moments.length; i++){
        const newMomentsDiv = document.createElement('div')
        newMomentsDiv.className = 'featured-item'

        const newMomentsTitle = document.createElement('p')
        newMomentsTitle.className = 'featured-title'
        newMomentsTitle.innerHTML = moments[i]['title']

        const newMomentsImage = document.createElement('img')
        newMomentsImage.className = 'featured-image'
        newMomentsImage.src = moments[i]['image']

        newMomentsDiv.appendChild(newMomentsImage)
        newMomentsDiv.appendChild(newMomentsTitle)
        featuredMomentsDiv.appendChild(newMomentsDiv)
    }
    
}

function CreateProjectsGridItem(){
    for(let i = 0; i < projects.length; i++){
        const imageContainerDiv = document.createElement('div')
        imageContainerDiv.className = 'featured-image-container'
        const imageContainerImage = document.createElement('img')
        imageContainerImage.className = 'featured-image featured-image-1'
        imageContainerImage.src = projects[i]['image']
        
        const textContainer = document.createElement('div')
        textContainer.className = 'featured-text-container'
        const textContent = document.createElement('div')
        textContent.className = 'featured-text-content'
        const textHeader = document.createElement('p')
        textHeader.className = 'featured-text-header'
        textHeader.innerHTML = projects[i]['title']
        const textSubheader = document.createElement('p')
        textSubheader.className = 'featured-text-subheader'
        textSubheader.innerHTML = projects[i]['subtitle']
        const textDescription = document.createElement('p')
        textDescription.className = 'featured-text-description'
        textDescription.innerHTML = projects[i]['text']
        const textButton = document.createElement('button')
        textButton.className = 'learn-more-button'
        textButton.innerHTML = 'LEARN MORE'

        imageContainerDiv.appendChild(imageContainerImage)
        console.log(imageContainerImage)

        textContainer.appendChild(textContent)
        textContent.appendChild(textHeader)
        textContent.appendChild(textSubheader)
        textContent.appendChild(textDescription)
        textContent.appendChild(textButton)
        console.log(textContainer)

        if(i % 2 == 0){
            featuredProjectsDiv.appendChild(imageContainerDiv)
            featuredProjectsDiv.appendChild(textContainer)
        } else {
            featuredProjectsDiv.appendChild(textContainer)
            featuredProjectsDiv.appendChild(imageContainerDiv)
        }
    }
}



CreateFeaturedGridItem();
CreateProjectsGridItem();