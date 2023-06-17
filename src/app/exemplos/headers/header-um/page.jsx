
import HeroUm from '../../../../components/Hero/HeroUm';
import {dataHeroUm, objHeaders} from '../../../../functions/examples';
import RouteLayout from '../../../layout';


const dados = objHeaders;

export default function HeaderUm() {
  return (
    <RouteLayout title="Header Um">
      <HeroUm 
        title={dados.title}  
        buttonTitle={dados.buttonTitle} 
        headline={dados.headline}
        description={dados.description}
        button={dados.button} 
        buttonExtra={dados.buttonExtra} 
      />
    </RouteLayout>
    
  )
};
