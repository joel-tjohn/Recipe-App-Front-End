import React from 'react'
import Header from './Header'

const ViewAll = () => {
    return (
        <div>
            <Header />

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">


                            <div class="card">
                                <img src="https://i.pinimg.com/564x/71/86/1c/71861cc99d0f6d4776c95741ed9316e0.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">PIZZA</p>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">


                            <div class="card">
                                <img src="https://i.pinimg.com/564x/4d/5d/98/4d5d981b39836c44755b4f9414ab8de1.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">BURGER</p>
                                </div>
                            </div>


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">





                            <div class="card">
                                <img src="https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">NOODLES</p>
                                </div>
                            </div>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">


                            <div class="card">
                                <img src="https://i.pinimg.com/736x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">BIRIYANI</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ViewAll