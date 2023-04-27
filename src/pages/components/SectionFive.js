import { useState } from "react"

function SectionFive() {

    const [chosen, setChosen] = useState(null)

    const toggle = (i) =>{
        if (chosen === i ){
            return setChosen(null)
        }
        
        setChosen(i)
    }

    return(
            <secction className="my-4">
                <div className="section-9 p-4">
                    <div className="flex flex-col">
                        {data.map((item, i) => (
                            <div className="flex flex-col md:grid md:grid-cols-4">
                                <div className="col-span-1 xl:col-span-1 my-2 border-r-3">
                                    <div className="section-9-header" onClick={() => toggle(i)}>
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>

                                <div className={chosen === i ? "show col-span-3" : "hide"}>
                                    <div className="col-span-3 grid grid-cols-4">
                                        {item.info.map((word)=>(
                                            <div className="col-span-2 md:col-span-1 xl:col-span-1 m-2 skill-list">
                                                <p>
                                                    <a href="#">{word.text}</a>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </secction>
    )
}

const data = [
    {
        title: "Top skills",
        info: [
          
{text: "Video Editors"},
{text: "Data Analyst"},
{text: "Shopify Developer"},
{text: "Ruby on Rails Developer"},
{text: "Android Developer"},
{text: "Bookkeeper"},
{text: "Content Writer"},
{text: "Copywriter"},
{text: "Database Administrator"},
{text: "Data Scientist"},
{text: "Front-End Developer"},
{text: "Game Developer"},
{text: "Graphic Designer"},
{text: "iOS Developer"},
{text: "Java Developer"},
{text: "JavaScript Developer"},
{text: "Logo Designer"},
{text: "Mobile App Developer"},
{text: "PHP Developer"},
{text: "Python Developer"},
{text: "Resume Writer"},
{text: "SEO Expert"},
{text: "Social Media Manager"},
{text: "Software Developer"},
{text: "Software Engineer"},
{text: "Technical Writer"},
{text: "UI Designer"},
{text: "UX Designer"},
{text: "Virtual Assistant"},
{text: "Web Designer"},
{text: "Wordpress Developer"},


        ]
    },
    {
        title: "Trending skills",
        info: [
            {text: "Video Editors"},
            {text: "Data Analyst"},
            {text: "Shopify Developer"},
            {text: "Ruby on Rails Developer"},
            {text: "Android Developer"},
            {text: "Bookkeeper"},
            {text: "Content Writer"},
            {text: "Copywriter"},
            {text: "Database Administrator"},
            {text: "Data Scientist"},
            {text: "Front-End Developer"},
            {text: "Game Developer"},
            {text: "Graphic Designer"},
            {text: "iOS Developer"},
            {text: "Java Developer"},
            {text: "JavaScript Developer"},
            {text: "Logo Designer"},
            {text: "Mobile App Developer"},
            {text: "PHP Developer"},
            {text: "Python Developer"},
            {text: "Resume Writer"},
            {text: "SEO Expert"},
            {text: "Social Media Manager"},
            {text: "Software Developer"},
            {text: "Software Engineer"},
            {text: "Technical Writer"},
            {text: "UI Designer"},
            {text: "UX Designer"},
            {text: "Virtual Assistant"},
            {text: "Web Designer"},
            {text: "Wordpress Developer"},
        ]
    },
    {
        title: "Top skills in US",
       info: [
        {text: "Video Editors"},
{text: "Data Analyst"},
{text: "Shopify Developer"},
{text: "Ruby on Rails Developer"},
{text: "Android Developer"},
{text: "Bookkeeper"},
{text: "Content Writer"},
{text: "Copywriter"},
{text: "Database Administrator"},
{text: "Data Scientist"},
{text: "Front-End Developer"},
{text: "Game Developer"},
{text: "Graphic Designer"},
{text: "iOS Developer"},
{text: "Java Developer"},
{text: "JavaScript Developer"},
{text: "Logo Designer"},
{text: "Mobile App Developer"},
{text: "PHP Developer"},
{text: "Python Developer"},
{text: "Resume Writer"},
{text: "SEO Expert"},
{text: "Social Media Manager"},
{text: "Software Developer"},
{text: "Software Engineer"},
{text: "Technical Writer"},
{text: "UI Designer"},
{text: "UX Designer"},
{text: "Virtual Assistant"},
{text: "Web Designer"},
{text: "Wordpress Developer"},
       ]
    },
    {
        title: "Project Catalog",
       info: [
        {text: "Video Editors"},
        {text: "Data Analyst"},
        {text: "Shopify Developer"},
        {text: "Ruby on Rails Developer"},
        {text: "Android Developer"},
        {text: "Bookkeeper"},
        {text: "Content Writer"},
        {text: "Copywriter"},
        {text: "Database Administrator"},
        {text: "Data Scientist"},
        {text: "Front-End Developer"},
        {text: "Game Developer"},
        {text: "Graphic Designer"},
        {text: "iOS Developer"},
        {text: "Java Developer"},
        {text: "JavaScript Developer"},
        {text: "Logo Designer"},
        {text: "Mobile App Developer"},
        {text: "PHP Developer"},
        {text: "Python Developer"},
        {text: "Resume Writer"},
        {text: "SEO Expert"},
        {text: "Social Media Manager"},
        {text: "Software Developer"},
        {text: "Software Engineer"},
        {text: "Technical Writer"},
        {text: "UI Designer"},
        {text: "UX Designer"},
        {text: "Virtual Assistant"},
        {text: "Web Designer"},
        {text: "Wordpress Developer"},
       ]
    },

]

export default SectionFive