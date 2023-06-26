import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-3 ">
        <div className="card my-3 App">
          <div className="card-body ">
            <div className="d-flex align-item-center justify-content-around">
              <h5 className="card-title">{note.title}</h5>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                style={{ color: "#001d57" }}
              ></i>
              <i
                className="fa-solid fa-trash-can mx-2"
                style={{ color: "#4d0034" }}
              ></i>
            </div>
            <p className="card-text">
              {note.description} Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Modi vel a quasi, magni porro at reprehenderit
              fuga voluptate, dolore architecto aut! Dicta, natus! Quidem
              numquam maiores voluptates quos, hic praesentium? Id obcaecati
              saepe cumque.
            </p>
            {/* <a href="/" className="btn btn-primary">
            Go somewhere
          </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
