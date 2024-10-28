import emailjs from 'emailjs-com';
import { useRef } from 'react';
import café from '../../public/assets/images/Café.jpg';

/**
 * Form component handles the contact form and sends an email using EmailJS.
 * Le composant Form gère le formulaire de contact et envoie un e-mail en utilisant EmailJS.
 *
 * @component
 * @example
 * return (
 *   <Form />
 * )
 */

function Form () {
    const form = useRef();

  /**
   * Sends an email using EmailJS when the form is submitted.
   * 
   * Envoie un e-mail en utilisant EmailJS lorsque le formulaire est soumis.
   * 
   * @param {Event} e - The form submission event. / L'événement de soumission du formulaire.
   * @returns {
   *  alert('Merci pour votre message, il sera traité au plus vite.');
   * alert('Une erreur est survenue, veuillez réessayer.');
   * }
   * 
   */

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_emailJS.0802', 'template_nu4a8xc', form.current, 'V3rnE9qm38QU5ZYxX')
            .then((result) => {
                console.log(result.text);
                alert('Merci pour votre message, il sera traité au plus vite.');
            }, (error) => {
                console.log(error.text);
                alert('Une erreur est survenue, veuillez réessayer.');
            });
        e.target.reset();
    }

  return (
    <div id="contact">
        <section className="container-contact">
            <h2 className="container_animation">Contact</h2>
            <h3 className="title-form">Un projet de création web ? </h3>

            <div className="d-flex align-items-center container-form">
                <div className="col-6">
                    <img className="form-img" src={café} alt="Tasse de Café" />
                </div>
                <div className=" col-5 colmd-6">
                    <form ref={form} onSubmit={sendEmail} className=" row gy-4" >
                        <div className="col-6">
                            <label htmlFor="firstname" className="form-label">Prénom</label>
                            <input type="text" className="form-control" id="firstname" name="firstname" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="lastname" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="lastname" name="lastname" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" name="email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" rows="3" id="message" name="message" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
  );
}
export default Form;