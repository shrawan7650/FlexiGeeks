import React from "react";
import MS from '../../../assets/logo/company-name/asset 1.png'
import orac from '../../../assets/logo/company-name/asset 3.png'
import google from '../../../assets/logo/company-name/asset 4.png'
import air from '../../../assets/logo/company-name/asset 6.png'
import godaddy from '../../../assets/logo/company-name/asset 8.svg'
import asana from '../../../assets/logo/company-name/asset 9.png'

export default function CompanySection() {
  return (
    <div>
      <div class="bg-white max-w-6xl mx-auto px-4 pt-16 pb-6" id="faq">
        <h2 class="lg:text-4xl sm:text-lg font-bold text-blue-900 text-center">
          Connect with Professionals who are at top Companies
        </h2>
        <div class="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-6 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <img
            alt=""
            class="h-20  mx-auto"
            src={MS}
          />

          <img
            alt=""
            class="h-20  mx-auto"
            src={orac}
          />

          <img
            alt=""
            class="h-10 lg:-ml-2 mx-auto"
            src={google}
          />

          <img
            alt=""
            class="h-15 lg:-ml-8 mx-auto"
            src={air}
          />

          <img
            alt=""
            class="mx-auto lg:-ml-4"
            src={godaddy}
          />

          <img
            alt=""
            class="h-15  mx-auto"
            src={asana}
          />
        </div>
      </div>
    </div>
  );
}
