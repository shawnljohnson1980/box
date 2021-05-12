import React, { useState } from 'react'



const BoxForm = props => {
    const [color, setColor] = useState("color");


    return (
        <div className="body">
            <nav class="navbar navbar-light navbar-expand-md shadow">
                <div class="container-fluid"><p class="navbar-brand text-primary">Welcome to my famous box game!</p><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navcol-1">
                        <ul class="navbar-nav">

                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-xl-8">
                        <form>
                            <div class="form-group"><label class="text-info" > Pick a color! </label>
                                <input class="border rounded border-warning shadow form-control" type="text"></input>
                            </div>
                            <div class="form-group text-right"><button class="btn btn-info btn-lg border rounded border-secondary shadow" type="submit">Button</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center align-content-center mb-5 pb-5
            ">
                <div class="border rounded border-dark shadow d-flex flex-row justify-content-center align-items-center align-content-center flex-wrap box mt-5"></div>
            </div>
        </div>
    );
};
export default BoxForm;