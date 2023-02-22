import React from 'react';

import '../styles/Contact.scss'

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1>Contact US</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder='abc' required autoFocus/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='abc@email.com' required/>
                    </div>
                    <div>
                        <label>Message</label>
                        <input placeholder='Tell us about your query..'  required/>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact
