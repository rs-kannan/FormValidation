import React from "react";

const Homepage = () => {
  return (
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mt-5">
      <div class="col-9 col-sm-8 col-lg-6">
        <img
          src="https://thumb.ac-illust.com/1e/1e839a5abbd32600ff678f19dd5bb77b_t.jpeg"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="600"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="text col-lg-5">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-center">
         LIBRARY MANAGEMENT SYSTEM
        </h1>
        <p class="lead text-center">
          Designed By Kannan RS
          <span class="material-symbols-outlined">deployed_code</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
