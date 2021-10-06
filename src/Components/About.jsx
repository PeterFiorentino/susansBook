import React from 'react';
import susan from '../Susan.JPG'


class About extends React.Component{
    constructor(){
        super()
        this.state = {
            feedback: '', 
            name: '', 
            email: ''
        }
    }

    handleChange = (event) => {
        this.setState({feedback: event.target.value})
    }

    handleSubmit = (event) => {
        const templateId = 'template_tt9f297';
    
        this.sendFeedback(templateId, {message: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
    
    sendFeedback (templateId, variables) {
    window.emailjs.send(
        'service_ejcupbt', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    render() {
        return (
            <div id="About">
                <div className="picAndBlurb">
                    <img id="susan" src={susan}></img>
                    <p>
                    Susan Fiorentino grew up in Staten Island, New York. 
                    At a young age, Susan knew she wanted a career where she had an opportunity 
                    to give back to others. Since graduating from Manhattan College in 2012, 
                    Susan has built a career in the non-profit sector. 
                    <br></br>
                    <br></br>
                    Susan is also one of the eleven founding members of the Tunnel to Towers 
                    Foundation’s Young Professionals Network. She first got involved with the 
                    Foundation because of her father, Detective Peter Fiorentino, who is a 9/11 
                    First Responder.  Currently, she serves as the Co-Chair of the First Responders 
                    and Military Committee. Susan credits the Foundation and the Young Professionals 
                    Network as major parts of healing through the pain that September 11, 2001, caused.
                    <br></br>
                    <br></br>
                    Susan is looking forward to continuing to support the Tunnel to Towers Foundation 
                    and the first responders in her community. One hundred percent of the proceeds from 
                    the sales of this book will benefit the Tunnel to Towers Foundation.
                    </p>
                </div>
                <form className="test-mailing">
                    <h1>Contact Susan</h1>
                    <div>
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange}
                        placeholder="Message..."
                        required
                        value={this.state.feedback}
                        style={{width: '50%', height: '150px'}}
                    />
                    </div>
                    <input className="contact" type="text" placeholder="Your Name..." onChange={this.handleNameChange}></input>
                    <input className="contact" type="text" placeholder="Your Email..." onChange={this.handleEmailChange}/>
                    <input id="contactButton" type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default About