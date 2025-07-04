


export const Planetas = () => {







    return (
        <div className="container text-center mt-5">
            <h1>Planetas</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534" className="card-img-top" alt="Tatooine" />
                        <div className="card-body">
                            <h5 className="card-title">Tatooine</h5>
                            <p className="card-text">Un planeta desértico y el hogar de Anakin Skywalker.</p>
                        </div>
                        <div className="card-footer text-align-between">
                            <button className="btn btn-dark">Detalles</button>
                            <button className="btn btn-primary ">Favoritos</button>
                        </div>
                    </div>
                </div>
                {/* Add more planet cards as needed */}
            </div>
        </div>
    );
}