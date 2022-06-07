// import { React, useState } from 'react';
// import './ContactForm.css'

// const ContactForm = (props) => {

//     const [ name, setName ] = useState('')
//     const [ email, setEmail ] = useState('')
//     const [ message, setMessage ] = useState('')
//     const [ submitted, setSubmitted ] = useState(false)

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         console.log('Sending')
//         let data = {
//             name,
//             email,
//             message
//         }
//         await fetch('/api/contact', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).then((res) => {
//             console.log('Response received')
//             if (res.status === 200) {
//                 console.log('Response succeeded!')
//                 setSubmitted(true);
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//             }
//         })
//     }

//     return (
//         <div className={ "form" }>
//             <form className={ contact_form } method="post" onSubmit={ handleSubmit }>
//                 <label className={ contact_form__name_label } htmlFor='name'>
//                     NAME *
//                 </label >
//                 <br />
//                 <input className={ contact_form__name_input }
//                     type="text"
//                     name="name"
//                     value={ name }
//                     onChange={ (e) => { setName(e.target.value) } }>

//                 </input>
//                 <br />
//                 <label className={ contact_form__email_label } htmlFor='email'>
//                     EMAIL *
//                 </label>
//                 <br />
//                 <input
//                     className={ contact_form__email_input }
//                     type="email"
//                     name="email"
//                     value={ email }
//                     onChange={ (e) => { setEmail(e.target.value) } }>
//                 </input>
//                 <br />
//                 <label className={ contact_form__message_label } htmlFor='message'>
//                     MESSAGE
//                 </label>
//                 <br />
//                 <textarea className={ contact_form__message_input }
//                     type="text"
//                     name="message"
//                     value={ message }
//                     onChange={ (e) => { setMessage(e.target.value) } }
//                 />
//                 <br />
//                 <br />
//                 <div className={ contact__button_container }>
//                     <Button cname={ contact__button } type="submit" onClick={ (e) => { handleSubmit(e) } }><span className={ button__text }>LETS TALK</span></Button>
//                 </div>
//             </form>
//         </div>
//     )
// };
// export default ContactForm;
