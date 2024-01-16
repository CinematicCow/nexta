"use client"
import { Clock2, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { z } from 'zod'
import { handleForm } from "./formHandler"

type Props = {}

const contactSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.number().min(10).max(10),
    message: z.string()
});


type contactFormData = z.infer<typeof contactSchema>;

const Contact = (props: Props) => {

    const [param, setParam] = useState<string>('');
    const [formData, setFormData] = useState<contactFormData>({
        fullName: '',
        email: '',
        phone: 0,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className='flex flex-col justify-stretch'>

            <div
                className="hero"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", minHeight: "40em" }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-8xl font-bold font-typer">Contact</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center pt-[120px] mb-[5em] px-10">
                <p className="mt-8 font-sen font-light text-clip max-w-5xl text-center text-2xl">
                    Welcome to <span className='font-extrabold'>Big Tree House</span>, where every cup tells a story and every dish is crafted with
                    passion. We value your feedback, inquiries, and the opportunity to connect with our community.
                    Here's how you can get in touch with us:
                </p>
                <div className='mt-14 flex flex-col justify-start lg:flex-row lg:space-x-4'>
                    <div className="mb-4">
                        <Link href="tel:0286269007" className="flex items-center">
                            <Phone className="mr-2" /> 02 8626 9007
                        </Link>
                    </div>
                    <div className="mb-4">
                        <Link href="geo:-33.8062613,151.0409249,15" className="flex items-center">
                            <MapPin className="mr-2" /> 88 Calder Rd, Rydalmere NSW 2116, Australia
                        </Link>
                    </div>
                    <div className="mb-4">
                        <p className="flex items-center">
                            <Clock2 className="mr-2" /> 6:10am - 4:00pm
                        </p>
                    </div>
                </div>

                <form action={handleForm} className="border border-primary rounded-lg p-11 mt-20">
                    <div className="lg:join">
                        <label className="form-control w-full max-w-xs mb-9 sm:mr-9">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label className="form-control w-full max-w-xs mb-9">
                            <div className="label">
                                <span className="label-text">Phone</span>
                            </div>
                            <input type="tel" placeholder="98xxxxxxxx" className="input input-bordered w-full max-w-xs"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <label className="form-control w-full max-w-xl mb-2">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="email" placeholder="johndoe@example.com" className="input input-bordered w-full max-w-xl"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label className="form-control w-full max-w-full">
                        <div className="label">
                            <span className="label-text">Comments or Message</span>
                        </div>
                        <textarea className="textarea textarea-bordered textarea-lg w-full"
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required

                        />
                    </label>
                    <br />
                    <button className="btn btn-primary container mx-auto" type="submit" >Submit</button>
                </form>

            </div>

        </div>
    )
}

export default Contact
