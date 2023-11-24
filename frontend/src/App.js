import React, {useEffect,useState} from 'react';

function App() {

  const [backendData,setBackendData] = useState([{}])
  const [textBoxValue, setTextBoxValue] = useState('');

  let countryName = '';
  let countryCapital = '';
  let countryCurrency = '';
  let countryPopulation = '';
  let countryRegion = '';
  let countryDemonym = '';
  let countryFlagSrc = '';

  useEffect(() => {
    fetch("/country/ireland").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  if (backendData[0] && backendData[0].name) {
    countryName = stringFormat(JSON.stringify(backendData[0].name.common));
    countryCapital = stringFormat(JSON.stringify(backendData[0].capital));
    countryCurrency = currencyCheck(stringFormat(JSON.stringify(backendData[0].currencies)));
    countryPopulation = stringFormat(JSON.stringify(backendData[0].population));
    countryRegion = stringFormat(JSON.stringify(backendData[0].region));
    countryDemonym = stringFormat(JSON.stringify(backendData[0].demonyms.eng.m));
    countryFlagSrc = JSON.stringify(backendData[0].flags.png).slice(1, -1).replace(/"/g, '')
  }

  function stringFormat(str){
    return str.replace(/[^a-zA-Z0-9]/g, '')
  }

  function currencyCheck(str){
    const currencyMapping = {
      USD: 'United States Dollar',
      AED: 'United Arab Emirates Dirham',
      AFN: 'Afghan Afghani',
      ALL: 'Albanian Lek',
      AMD: 'Armenian Dram',
      ANG: 'Netherlands Antillean Guilder',
      AOA: 'Angolan Kwanza',
      ARS: 'Argentine Peso',
      AUD: 'Australian Dollar',
      AWG: 'Aruban Florin',
      AZN: 'Azerbaijani Manat',
      BAM: 'Bosnia-Herzegovina Convertible Mark',
      BBD: 'Barbadian Dollar',
      BDT: 'Bangladeshi Taka',
      BGN: 'Bulgarian Lev',
      BHD: 'Bahraini Dinar',
      BIF: 'Burundian Franc',
      BMD: 'Bermudian Dollar',
      BND: 'Brunei Dollar',
      BOB: 'Bolivian Boliviano',
      BRL: 'Brazilian Real',
      BSD: 'Bahamian Dollar',
      BTN: 'Bhutanese Ngultrum',
      BWP: 'Botswanan Pula',
      BYN: 'Belarusian Ruble',
      BZD: 'Belize Dollar',
      CAD: 'Canadian Dollar',
      CDF: 'Congolese Franc',
      CHF: 'Swiss Franc',
      CLP: 'Chilean Peso',
      CNY: 'Chinese Yuan',
      COP: 'Colombian Peso',
      CRC: 'Costa Rican Colón',
      CUP: 'Cuban Peso',
      CVE: 'Cape Verdean Escudo',
      CZK: 'Czech Republic Koruna',
      DJF: 'Djiboutian Franc',
      DKK: 'Danish Krone',
      DOP: 'Dominican Peso',
      DZD: 'Algerian Dinar',
      EGP: 'Egyptian Pound',
      ERN: 'Eritrean Nakfa',
      ETB: 'Ethiopian Birr',
      EUR: 'Euro',
      FJD: 'Fijian Dollar',
      FKP: 'Falkland Islands Pound',
      FOK: 'Faroe Islands Króna',
      GEL: 'Georgian Lari',
      GGP: 'Guernsey Pound',
      GHS: 'Ghanaian Cedi',
      GIP: 'Gibraltar Pound',
      GMD: 'Gambian Dalasi',
      GNF: 'Guinean Franc',
      GTQ: 'Guatemalan Quetzal',
      GYD: 'Guyanaese Dollar',
      HKD: 'Hong Kong Dollar',
      HNL: 'Honduran Lempira',
      HRK: 'Croatian Kuna',
      HTG: 'Haitian Gourde',
      HUF: 'Hungarian Forint',
      IDR: 'Indonesian Rupiah',
      ILS: 'Israeli New Shekel',
      IMP: 'Isle of Man Pound',
      INR: 'Indian Rupee',
      IQD: 'Iraqi Dinar',
      IRR: 'Iranian Rial',
      ISK: 'Icelandic Króna',
      JEP: 'Jersey Pound',
      JMD: 'Jamaican Dollar',
      JOD: 'Jordanian Dinar',
      JPY: 'Japanese Yen',
      KES: 'Kenyan Shilling',
      KGS: 'Kyrgystani Som',
      KHR: 'Cambodian Riel',
      KID: 'Kiribati Dollar',
      KRW: 'South Korean Won',
      KWD: 'Kuwaiti Dinar',
      KYD: 'Cayman Islands Dollar',
      KZT: 'Kazakhstani Tenge',
      LAK: 'Laotian Kip',
      LBP: 'Lebanese Pound',
      LKR: 'Sri Lankan Rupee',
      LRD: 'Liberian Dollar',
      LSL: 'Lesotho Loti',
      LYD: 'Libyan Dinar',
      MAD: 'Moroccan Dirham',
      MDL: 'Moldovan Leu',
      MGA: 'Malagasy Ariary',
      MKD: 'Macedonian Denar',
      MMK: 'Myanmar Kyat',
      MNT: 'Mongolian Tugrik',
      MOP: 'Macanese Pataca',
      MRU: 'Mauritanian Ouguiya',
      MUR: 'Mauritian Rupee',
      MVR: 'Maldivian Rufiyaa',
      MWK: 'Malawian Kwacha',
      MXN: 'Mexican Peso',
      MYR: 'Malaysian Ringgit',
      MZN: 'Mozambican Metical',
      NAD: 'Namibian Dollar',
      NGN: 'Nigerian Naira',
      NIO: 'Nicaraguan Córdoba',
      NOK: 'Norwegian Krone',
      NPR: 'Nepalese Rupee',
      NZD: 'New Zealand Dollar',
      OMR: 'Omani Rial',
      PAB: 'Panamanian Balboa',
      PEN: 'Peruvian Nuevo Sol',
      PGK: 'Papua New Guinean Kina',
      PHP: 'Philippine Peso',
      PKR: 'Pakistani Rupee',
      PLN: 'Polish Złoty',
      PYG: 'Paraguayan Guarani',
      QAR: 'Qatari Rial',
      RON: 'Romanian Leu',
      RSD: 'Serbian Dinar',
      RUB: 'Russian Ruble',
      RWF: 'Rwandan Franc',
      SAR: 'Saudi Riyal',
      SBD: 'Solomon Islands Dollar',
      SCR: 'Seychellois Rupee',
      SDG: 'Sudanese Pound',
      SEK: 'Swedish Krona',
      SGD: 'Singapore Dollar',
      SHP: 'Saint Helena Pound',
      SLL: 'Sierra Leonean Leone',
      SOS: 'Somali Shilling',
      SPL: 'Seborgan Luigino',
      SRD: 'Surinamese Dollar',
      STN: 'São Tomé & Príncipe Dobra',
      SVC: 'Salvadoran Colón',
      SYP: 'Syrian Pound',
      SZL: 'Swazi Lilangeni',
      THB: 'Thai Baht',
      TJS: 'Tajikistani Somoni',
      TMT: 'Turkmenistani Manat',
      TND: 'Tunisian Dinar',
      TOP: 'Tongan Paʻanga',
      TRY: 'Turkish Lira',
      TTD: 'Trinidad & Tobago Dollar',
      TWD: 'New Taiwan Dollar',
      TZS: 'Tanzanian Shilling',
      UAH: 'Ukrainian Hryvnia',
      UGX: 'Ugandan Shilling',
      UYU: 'Uruguayan Peso',
      UZS: 'Uzbekistani Som',
      VES: 'Venezuelan Bolívar',
      VND: 'Vietnamese Đồng',
      VUV: 'Vanuatu Vatu',
      WST: 'Samoan Tala',
      XAF: 'Central African CFA Franc',
      XCD: 'Eastern Caribbean Dollar',
      XDR: 'Special Drawing Rights',
      XOF: 'West African CFA Franc',
      XPF: 'CFP Franc',
      YER: 'Yemeni Rial',
      ZAR: 'South African Rand',
      ZMW: 'Zambian Kwacha',
      ZWL: 'Zimbabwean Dollar',
    };

    const code = str.substring(0,3).toUpperCase();
    return currencyMapping[code] || 'Currency Not Found';
  }

  const onButtonClick = () => {
    // console.log('button works, textbox = ', textBoxValue)
  }

  return(
    <div>
      {
        backendData ? (
          <div>
            <input 
              type='text' 
              value={textBoxValue} 
              onChange={(e) => setTextBoxValue(e.target.value)} 
              placeholder='Enter Country Name' 
            />
            <button onClick={onButtonClick}>Search</button>
            <h1>{countryName}</h1>
            <img src={countryFlagSrc} alt="national flag"/>
            <p>Capital: {countryCapital}</p>
            <p>Region: {countryRegion}</p>
            <p>Currency: {countryCurrency}</p>
            <p>Population: {countryPopulation}</p>
            <p>Demonym: {countryDemonym}</p>
            
          </div>
        ) : (
        <p>{'Loading...'}</p>
        )
      }
      
    </div>
  )
}

export default App;