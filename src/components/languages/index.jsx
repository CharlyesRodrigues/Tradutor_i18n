


import brasil from '../../assets/flags/brasil.svg'
import spain from '../../assets/flags/spain.png'
import usa from '../../assets/flags/usa.png'

import { useTranslation } from 'react-i18next'
import './style.css';

const languagesOptions = [
{
name: "Português",
value: "pt",
flag : brasil
},
{
    name: "Espanhol",
    value: "esp",
    flag : spain
    },
    {
        name: "English",
        value: "en",
        flag : usa
    },
]


export const  LanguageSwitcher = () => {

const{ t, i18n } = useTranslation();
return(
<div className='bandeiras'>
     

<span >{t("selectLinguagem")}  </span>

{languagesOptions.map((languagesOption)=>(
<button
key={languagesOption.value}
onClick = {()=>{

i18n.changeLanguage (languagesOption.value);

}}

>
<img src='{languagesOptions.flag}' />




</button>

))}

</div>

)

}