import React from 'react';

import './PolicyStoreEncrypt.scss';

// import sub sections
import HowWeStoreData from "../subsections/HowWeStoreData";
import HowWeEncryptData from "../subsections/HowWeEncryptData";

const PolicyStoreEncrypt = (props) => (
  <div className="policy-store-encrypt policy-segment" id="policy-store-encrypt">
    <HowWeStoreData />
    <HowWeEncryptData />
  </div>
)

export default PolicyStoreEncrypt
