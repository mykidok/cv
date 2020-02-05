import React from "react";

const Languages = () => {
    return (
        <div className="mt-2">
            <div className="title mb-2">Languages&nbsp;<span role="img" aria-label="earth">🌍</span></div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2">
                            <p>$&nbsp;<span className="text-white">french:</span></p>
                        </div>
                        <div className="col-md-10">
                            <div className="plain outer">
                                <div className="inner hundred"><p className="text-center" style={{ color: "black" }}>100%</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <p>$&nbsp;<span className="text-white">english:</span></p>
                        </div>
                        <div className="col-md-10">
                            <div className="plain outer">
                                <div className="inner ninety"><p className="text-center" style={{ color: "black" }}>90%</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <p>$&nbsp;<span className="text-white">spanish:</span></p>
                        </div>
                        <div className="col-md-10">
                            <div className="plain outer">
                                <div className="inner eighty"><p className="text-center" style={{ color: "black" }}>80%</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Languages