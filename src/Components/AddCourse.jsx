import React from 'react'

const AddCourse = () => {
  return (
    <div>
        <h1 className="text-center">UPLOAD COURSE DETAILS</h1>

<div className="container">
  <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

      <div className="row">

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label className="form-label">Course Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label className="form-label">Duration</label>
          <input type="text" className="form-control" placeholder="e.g. 3 Months" />
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label className="form-label">Fee</label>
          <input type="number" className="form-control" />
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label className="form-label">Mode</label>
          <select className="form-control">
            <option>Select Mode</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <label className="form-label">Trainer</label>
          <input type="text" className="form-control" />
        </div>

        <div className="col col-12 text-center">
          <button className="btn btn-primary mt-3">Submit</button>
        </div>

      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default AddCourse