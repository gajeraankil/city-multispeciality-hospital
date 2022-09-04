import React from "react";

const List = ({ data, getId }) => {
  return (
    <>
      <div className="row">
        {data.map((v, i) => {
          return (
            <div key={i} className="col-lg-6 mt-4">
              <div className="list">
                {v.img ? (
                  <div className="pic">
                    <img src={v.img} className="img-fluid" alt="" />
                  </div>
                ) : null}
                <div className="list-info">
                  {v.name ? <h4>{v.name}</h4> : null}
                  {v.designation ? <span>{v.designation}</span> : null}
                  {v.quantity ? <span>Quantity: {v.quantity}</span> : null}
                  {v.desc ? <p>{v.desc}</p> : null}
                  {v.id ? <p>Id: {v.id}</p> : null}
                  {v.price ? <p>Price: {v.price}</p> : null}
                  {v.expiry ? <p>Expiry: {v.expiry}</p> : null}
                  {v.social ? (
                    <div className="social">
                      {v.social.twitter ? (
                        <a href={v.social.twitter}>
                          <i className="ri-twitter-fill" />
                        </a>
                      ) : null}
                      {v.social.facebook ? (
                        <a href={v.social.facebook}>
                          <i className="ri-facebook-fill" />
                        </a>
                      ) : null}
                      {v.social.instagram ? (
                        <a href={v.social.instagram}>
                          <i className="ri-instagram-fill" />
                        </a>
                      ) : null}
                      {v.social.linkedin ? (
                        <a href={v.social.linkedin}>
                          <i className="ri-linkedin-fill" />
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                  {v.id ? (
                    <button className="mt-4" onClick={() => getId(v.id)}>
                      Click to get ID
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
