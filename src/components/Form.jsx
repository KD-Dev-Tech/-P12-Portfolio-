import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Form () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_emailJS.0802', 'template_6n8k1cd', form.current, 'user_V3rnE9qm38QU5ZYxX')
            .then((result) => {
                console.log(result.text);
                alert('Votre message a bien été envoyé !');
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
                    <img className="form-img" src="../public/assets/images/Café.jpg" alt="" />
                </div>
                <div className=" col-5 colmd-6">
                    <form ref={form} onSubmit={sendEmail} className=" row gy-4" >
                        <div className="col-6">
                            <label htmlFor="prenom" className="form-label">Prénom</label>
                            <input type="text" className="form-control" id="prenom" name="prenom" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="nom" className="form-label">Nom</label>
                            <input type="text" className="form-control" id="nom" name="nom" />
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