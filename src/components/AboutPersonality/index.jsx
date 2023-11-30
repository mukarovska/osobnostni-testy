import { Link } from 'react-router-dom';
import { ButtonPrimary } from '../ButtonPrimary';
import './style.css';

export const AboutPersonality = () => {
  return (
    <section className="aboutPersonality" id="aboutPersonality">
      <h2 className="aboutPersonality__heading">Co je to osobnost?</h2>
      <p className="aboutPersonality__info">
        Osobnost je pojem, který popisuje různé části lidské povahy. Zabývá se
        lidským chováním, zahrnujícím psychické, emoční, společenské, tělesné a
        duchovní aspekty, přičemž existuje tvrzení, že jedinec může mít i skryté
        vlastnosti, kterým nerozumíme.
      </p>
      <Link to="/personality">
        <ButtonPrimary>Zjistit více</ButtonPrimary>
      </Link>
    </section>
  );
};
