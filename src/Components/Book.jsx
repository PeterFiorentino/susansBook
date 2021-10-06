import React, { useState } from 'react';
import cover from '../cover.png'
import axios from 'axios';
import { PayPalButton } from "react-paypal-button-v2";


class Book extends React.Component {
    constructor(){
        super()
        this.state = {
            future_customer_name: "",
            future_customer_email: "",
            future_customer_address: "",
            city_state_zip: "",
            thank_you: false
        }
    }


    changeCustomerName = (e) => {
        this.setState({ future_customer_name: e.target.value})
    }

    changeCustomerEmail = (e) => {
        this.setState({ future_customer_email: e.target.value})
    }

    changeCustomerAddress = (e) => {
        this.setState({ future_customer_address: e.target.value})
    }

    changeCustomerCSZ= (e) => {
        this.setState({ city_state_zip: e.target.value})
    }

    handleSubmit = (event) => {
        const templateId = 'template_r8im1mh';
    
        this.sendFeedback(templateId, {street_address: this.state.future_customer_address, from_name: this.state.future_customer_name, reply_to: this.state.future_customer_email, csv: this.state.city_state_zip})

        this.setState({
            future_customer_name: "",
            future_customer_email: "",
            future_customer_address: "",
            city_state_zip: "",
            thank_you: true
        })
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

    render(){
        return (
            <div id="Book">

                <div className="payment">
                        <img src={cover} id="purchasePic" />
                        <div>
                            <p id="soldOut" >
                                For a $30 donation (plus $8.95 for shipping and handling) you will receive a copy of 
                                We Will Never Forget: The Stories of Children of 9/11 First Responders. 
                                100 percent of the proceeds will be directed to The Tunnel to Towers Foundation.

                                Please enter your information below to receive payment instructions.

                                Due to limited availability, one purchase per person. 
                            </p>
                            <form id="round2form" onSubmit={this.addCustomer}>
                                <input type="text" placeholder="Name" value={this.state.future_customer_name} onChange={this.changeCustomerName} className="purchaseBox"></input>
                                <input type="text" placeholder="Email" value={this.state.future_customer_email} onChange={this.changeCustomerEmail} className="purchaseBox"></input>
                                <input type="text" placeholder="Street Address" value={this.state.future_customer_address} onChange={this.changeCustomerAddress} className="purchaseBox"></input>
                                <input type="text" placeholder="City, State, Zip" value={this.state.city_state_zip} onChange={this.changeCustomerCSZ} className="purchaseBox"></input>
                                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                            </form>
                            {this.state.thank_you ? <p id="thankyou">Thank you for your interest in We Will Never Forget! Please check your email for payment instructions.</p> : <p></p>}
                        </div>
                 </div>            
            </div>
        )
    }

}

export default Book