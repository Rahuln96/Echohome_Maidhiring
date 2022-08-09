import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef()
  // const sendEmail = () => {};
  
  
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vpii398', 'template_td8a9zn', form.current, '6kHCQb_QMpeTBwO8A')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        alert('Your Message has been submit Successfull ')
        // document.write('Your Message has been successfull')
    };
  return (
    <>
      <div className="container-fluid bg-success p-5 text-white text-center">
        <div className="container py-5">
     <h1>Regsiter Now</h1>
     </div>
     </div>
       <div className="container  p-5">
     <form action="">
      <div className="row">
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='Your Name' name='user_name' /> <br />
      </div>
        <div className="col-md-6">
      <input type="email" className='form-control' placeholder='Your Email' name='user_email' /> <br />
      </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
      <input type="number" className='form-control' placeholder='Mobile Number' name='user_phone' /> <br />
      </div>
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='Address' name='user_address' /> <br />
      </div>
        <div className="col-md-6">
      <input type="text" className='form-control' placeholder='City' name='user_city' /> <br />
      </div>
        <div className="col-md-4">
        <select name="user_state" id="" class="form-select" aria-placeholder="STATE" >
      <option value="">Bihar</option>
      <option value="">Bhopal</option>
      <option value="">Jaipur</option>
      <option value="">Banglore</option>
      <option value="">Nagpur</option>
      <option value="">Surat</option>
      <option value="">Ahmedabad</option>
      <option value="">Pune</option>
      <option value="">Kolkata</option>
      <option value="">Aurangabad</option>
      <option value="">New Delhi</option>
      <option value="">Lucknow</option>
      <option value="">Hyderabad</option>
      <option value="">Varanasi</option>
      <option value="">Agra</option>
      <option value="">Kanpur</option>
      <option value="">Karnataka</option>
      <option value="">Tamil nadu</option>
  </select>      </div>
        <div className="col-md-2">
      <input type="number" className='form-control' placeholder='Pin Code' name='user_pincode' /> <br />
      </div>
        <div className="col-md-6">
        <label htmlFor="" >Choose your Suitable Job</label> <br />
<select name="user_job" id="" className='form-select'>
  <option value="">Elderly Care</option>
  <option value="">Babysitter</option>
  <option value="">Cooking</option>
  <option value="">Cleaning</option>
</select>
         </div>
        <div className="col-md-6">
        <label htmlFor="" >Gender</label> <br />
       <input type="radio" className='form-check-input'/> 
       <label htmlFor="" className='form-check-label'> Male</label>
       <input type="radio" className='form-check-input'/> 
       <label htmlFor="" className='form-check-label'> Female</label>
         </div>

      <textarea name="message" id="" cols="12" rows="10" className='form-control mt-4' placeholder='Type your message'></textarea>
        <button type="submit" className='btn btn-success mt-4'>Register</button>
      </div>
     </form>
    </div>
    </>
  )
}
