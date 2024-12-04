import { useState } from 'react'
import storeData from './storeData.json'

function storeInformation({ 
  storeName,
  address,
  phoneNumber
}) {
  return (
    <>
    <div className='information'>
      <ul>
        <li>{storeName}</li>
      </ul>
      <p>住所：<b>{address}</b></p>
      <p>電話番号<b>{phoneNumber}</b></p>

    </div>

    </>
  );
}
function App() {

  return (
    <>
    <h1>店舗情報</h1>

    <select>
          <option value=""></option>
        </select>

    </>
  );
}

export default App
