


export const Personajes = () => {







    
    return (
        <div className="container text-center mt-5">
            <h1>Personajes</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796" className="card-img-top" alt="Luke Skywalker" />
                        <div className="card-body">
                            <h5 className="card-title">Luke Skywalker</h5>
                            <p className="card-text">Un joven granjero que se convierte en un Jedi legendario.</p>
                        </div>
                    </div>
                </div>
                {/* Add more character cards as needed */}
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720" className="card-img-top" alt="Darth Vader" />
                        <div className="card-body">
                            <h5 className="card-title">Darth Vader</h5>
                            <p className="card-text">Un antiguo Jedi que se convierte en el Lord Sith más temido.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}