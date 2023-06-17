
import HeroDois from '../../../../components/Hero/HeroDois';
import HeroUm from '../../../../components/Hero/HeroUm';
import {objHeadersComItens} from '../../../../functions/examples';
import RouteLayout from '../../../layout';


const dados = objHeadersComItens;

export default function HeaderDois() {
  return (
    <RouteLayout title="Header Dois">
      <HeroDois 
        itens={dados.itens}
      />
    </RouteLayout>
    
  )
};
