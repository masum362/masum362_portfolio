import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiGmail } from 'react-icons/si';
import { FaPhone, FaAddressBook } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mhlta1v', 'template_3ud0meq', form.current, {
                publicKey: 'KyO7_OmJay_Y6syw-',
            })
            .then(
                (result) => {
                    Swal.fire({
                        title: "Success",
                        text: "Successfully sent message",
                        icon: "success"
                    });
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };


    return (
        <div id='contact' className='flex flex-col md:flex-row items-center justify-between w-[90%] m-auto mt-16 lg:mt-10'>
            <div className=' w-full lg:w-1/2 text-white flex flex-col justify-center items-start p-3 gap-3'>
                <h4 className='lg:p-3 md:p-0 lg:ml-8 text-lg font-medium text-[#ff5823]'>Get In Touch</h4>
                <h1 className='lg:p-3 lg:ml-8 text-3xl lg:text-4xl font-bold capitalize'>let's talk about your project.</h1>

            </div>
            <div className=' p-3 w-full flex flex-col items-start justify-center md:w-1/2 gap-3 lg:px-14'>
                {/* <div className='flex items-center justify-center gap-3 my-3'>
                    <div className='p-2 lg:p-3 rounded-full bg-[#ff5823] text-white'>
                        <SiGmail className='text-3xl ' />
                    </div>
                    <div className='text-white flex flex-col '>
                        <h1 className='capitalize text-lg lg:text-xl font-medium'>email me:</h1>
                        <p className='font-thin text-lg'>masumahmed64077@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <div className='p-2 lg:p-3 rounded-full bg-[#ff5823] text-white'>
                        <FaPhone className='text-3xl ' />
                    </div>
                    <div className='text-white'>
                        <h1 className='capitalize text-lg lg:text-xl font-medium'>Phone me:</h1>
                        <p className='font-thin text-lg'>+8801775994314</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-3 my-3'>
                    <div className='p-2 lg:p-3 rounded-full bg-[#ff5823] text-white'>
                        <FaAddressBook className='text-3xl ' />
                    </div>
                    <div className='text-white'>
                        <h1 className='capitalize text-lg lg:text-xl font-medium'>Address:</h1>
                        <p className='font-thin text-lg'>Sylhet,Bangladesh.</p>
                    </div>
                </div> */}

                <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start gap-4 w-full '>

                    <div className='w-full space-y-2'>
                        <label className="input input-bordered flex items-center gap-2 w-full text-white font-semibold"  >
                            Name
                        </label>
                        <input type="text" name="user_name" className="input input-bordered w-full max-w-full p-2" placeholder="Name" required />
                    </div>
                    <div className='w-full space-y-2'>
                        <label className="input input-bordered flex items-center gap-2 w-full text-white font-semibold"  >
                            Email
                        </label>
                        <input type="email" name="user_email" className="input input-bordered w-full max-w-full p-2" placeholder="Email" required />
                    </div>
                    <div className='w-full flex flex-col  gap-2'>
                        <label className='text-white font-semibold'>Message</label>
                        <textarea
                            placeholder="message"
                            name="message"
                            className="textarea textarea-bordered textarea-lg w-full max-w-full p-2" required></textarea>
                    </div>
                    <button type='submit' className='btn bg-[#ff5823] hover:bg-[#eb643f] duration-150 text-white p-2 rounded-lg font-bold w-full'>Send message</button>
                </form>

            </div>
        </div>
    )
}

export default Contact