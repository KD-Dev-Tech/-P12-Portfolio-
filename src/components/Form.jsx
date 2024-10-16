
function Form () {
  return (
    <div id="contact" className="py-5">
        <h2 className="container_animation">Contact</h2>
        <section className="container-contact">
            <h3 className="mb-0">Un projet de création web ? </h3>

            <div className="row gy-4 mt-4">
                <div className="col-12 col-md-5">
                    <img src="../public/assets/images/Café.jpg" alt="" />
                </div>
                <div className="col-12 offset-md-1 colmd-6">
                    <form action="" className="row gy-4" >
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