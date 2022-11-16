


import brasil from '../../assets/flags/brasil.png'
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
     


{languagesOptions.map((languagesOption)=>(
<button
key={languagesOption.value}
onClick = {()=>{

i18n.changeLanguage (languagesOption.value);

}}

>
<img className='imagem1' src='src\assets\flags\brasil.png' />
<img className='imagem2' src='src\assets\flags\spain.png' />
<img className='imagem3' src='src\assets\flags\usa.png' />
<div >
<span className='idiomas'>{languagesOption.name}</span>
</div>

</button>

))}

</div>

)

}