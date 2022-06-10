import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_khk0pp6', 'template_j1dssek', form.current, 'WQJ_k9hVtCWNX0LAF')
            .then((result) => {
                toast('massege send successfully', result);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={{ backgroundColor: '#050A30', color: '#fff' }} className='d-flex align-items-center'>

            <div className='mx-auto border rounded py-2 p-5 my-2'>
                <h1>Contact me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label><br />
                    <input type="text" name="user_name" /> <br />
                    <label>Email</label><br />
                    <input type="email" name="user_email" /><br />
                    <label>Message</label><br />
                    <textarea name="message" cols='28' /><br />
                    <input className='btn btn-outline-success' type="submit" value="Send" /> <br />

                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
