"use client"

const Error = () => {
    return (
        <>
            <div className="error-page-area default-padding text-center">
                <div className="shape-left" style={{ background: 'url(/assets/img/shape/44-left.png)' }} />
                <div className="shape-right" style={{ background: 'url(/assets/img/shape/44-right.png)' }} />
                <div className="container">
                    <div className="error-box">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>Error</h1>
                                <h2>Something went wrong!</h2>
                                <p>
                                    Please try refreshing the page or come back later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error;