import React from 'react';
import { initMDB } from "mdb-ui-kit";

initMDB();

export default function Cards() {
  return (
    <div id="center">
    <div className="d-flex justify-content-around flex-wrap p-3 m-3" id="box-size">
      {/* First Row */}
      <div className="card m-3">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid" alt="Nature" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project 1</h5>
          <p className="card-text">Built with React.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div>

      <div className="card m-3">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/114.webp" className="img-fluid" alt="Nature" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project 2</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div>

      <div className="card m-3">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/102.webp" className="img-fluid" alt="Nature" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project 3</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div>

      {/* Second Row */}
      <div className="card m-3">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/117.webp" className="img-fluid" alt="Nature" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project 4</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div>

      <div className="card m-3">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/113.webp" className="img-fluid" alt="Nature" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project 5</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div>

      <div className="card m-3">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/101.webp" className="img-fluid" alt="Nature" />
          <a href="#!">
            <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-title">Project 6</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#!" className="btn btn-primary" data-mdb-ripple-init>Button</a>
        </div>
      </div>

      {/* Add more cards as needed */}
    </div>
    </div>
  );
}
