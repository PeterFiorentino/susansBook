import React from 'react';
import cover from '../cover.png'


class Home extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
       
    //     }
    // }

    render() {
        return (
            <div id="home-page">
                <header><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link></header>
                <div className="picAndBlurb" >
                    <img id="coverHome" src={cover}></img>
                    <p>My name is Susan Fiorentino. 
                       I am the daughter of a 9/11 First Responder and as we are nearing the 20th Anniversary of this day,
                       I wanted to publish a project to make sure that our stories will forever be told.
                       <br></br>
                       <br></br>
                       Honoring the heroic men and women, and those who made and continue to make the ultimate sacrifice in the 
                        line of duty is another thing I am so passionate about. Being involved with the Tunnel to Towers Foundation 
                        has been a huge part of my own healing, while supporting first responders and their families through some of 
                        their most difficult times. Being a member of the Young Professionals Network has allowed me to further connect 
                        and support their mission. So I want to put into action their motto “While we can, let us do good.
                        <br></br>
                        <br></br>
                        We Will Never Forget has been featured in &nbsp;
                        <a className="featuredInLinks" href="https://www.silive.com/gracelyn/2020/10/staten-islander-seeking-fellow-children-of-911-first-responders-to-include-in-upcoming-book.html ">SI Live</a>, &nbsp;
                        <a className="featuredInLinks" href="https://pix11.com/news/local-news/staten-island/children-of-9-11-responders-to-author-remembrance-book/">Pix 11</a>, &nbsp;
                        <a className="featuredInLinks" href="https://www.themorningspotlight.com/blog/tms22-susan-fiorentino-children-of-911-first-responders">The Morning Spotlight</a>, &nbsp;
                        <a className="featuredInLinks" href="https://omny.fm/shows/law-enforcement-today/9-11-from-an-nypd-detective-s-daughter-her-life-af">Law Enforcement Today</a>, &nbsp;
                        and the &nbsp;
                        <a className="featuredInLinks" href="https://t2t.org/young-professionals-network/">Tunnel to Towers Foundation - Young Professionals Group</a>
                        <br></br>
                        <br></br>
                        I appreciate all your support in this journey – donations, raising awareness, sharing this page, 
                        doing a kind act for a first responder.. anything you can do to help. 
                        Please help me and other children of 9/11 First Responders parents make sure people Never Forget.

                    </p>
                </div>
            </div>
        )}
}

export default Home