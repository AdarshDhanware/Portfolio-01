import React, { useEffect, useRef, useState } from 'react';
import { BsSend } from "react-icons/bs";
import { useForm, ValidationError } from '@formspree/react';

function Contact() {

    const myForm = import.meta.env.VITE_FORMS_PREE_URL

    const [state, handleSubmit] = useForm(myForm);
    const formRef = useRef();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    useEffect(() => {

        if (state.succeeded) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setEmail('');
                setName('');
                setMessage('');
                formRef.current.reset();
            }, 3000);
        }
        if (state.errors) {
            setError(true);
            setTimeout(() => {
                setError(false);
                setEmail('');
                setName('');
                setMessage('');
                formRef.current.reset();
            }, 3000);
        }
    },[state.succeeded, state.errors])


return (
    <div className='px-3 sm:px-10 py-20 mt-10 bg-zinc-950 rounded-3xl'>
        <div className='md:px-10 flex flex-col xl:flex-row gap-10 justify-between items-center'>
            <div>
                <span className='text-4xl md:text-7xl uppercase px-22 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text italic'>contact</span>
                {(success) ? (
                    <h1 className={`text-md md:text-xl px-22 uppercase ${(success) ? 'visible' : 'hidden'}`}>Response sent successfully!</h1>
                ) :(
                    <h1 className={`text-md md:text-xl px-22 uppercase ${(error) ? 'visible' : 'hidden'}`}>{error}</h1>
                )}
                {/* {success && <h1 className="text-md md:text-xl px-22 uppercase">Response sent successfully!</h1>}
                {error && <h1 className="text-md md:text-xl px-22 uppercase">{error}</h1>} */}
            </div>

            <div className='w-full md:w-xl'>
                <form ref={formRef} className='p-3 md:p-5 border gap-3 md:gap-5 rounded-2xl flex flex-col' onSubmit={handleSubmit}>
                    <input
                        className='border rounded-lg md:rounded-md px-2 md:px-3 py-1 md:py-2 text-xl'
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        required
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />

                    <input
                        className='border rounded-lg md:rounded-md px-2 md:px-3 py-1 md:py-2 text-xl'
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <textarea
                        className='border rounded-lg md:rounded-md px-2 md:px-3 py-1 md:py-2 text-xl resize-none h-52'
                        name="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />

                    <button
                        className='border hover:cursor-pointer rounded-2xl flex text-xl justify-center items-center gap-3 px-5 py-2 uppercase'
                        type='submit'
                    >
                        Send <BsSend />
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default Contact;
