import React from "react";
import Notice from "./alerts/notice.component";

const DefaultLayout = ({ title, notice = null, children }) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="card">
                        {title && <h5 className="card-header">{title}</h5>}
                        <div className="card-body">
                            {notice && <Notice {...notice} />}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
