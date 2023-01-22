import React, { useEffect } from 'react';
import Star from "../../assets/images/icons/star.png";

function Regulations() {

    useEffect(() => {
        const galleryContent = document.getElementById("scroll-to-element");
        galleryContent.scrollIntoView({ behavior: 'smooth' });
    });
    
    return (
        <>
            <p id="scroll-to-element"></p>
            <div id="content">
                <div id="background-image-container">
                    <div id="regulation-header-part">
                        <h2 id="regulations-header">Regulamin</h2>
                    </div>
                    <div id="regulations-content">                       
                        <p className="single-regulation">Regulamin obowiązuje wszystkich korzystających z usług Stajni pod Wiślanym Wałem. Wejście do stajni i korzystanie z jej usług oznacza akceptację regulaminu.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Wchodząc do stajni oraz na jej teren (pastwiska, ujeżdżalnia, wszelkie budynki) należy zdawać sobie sprawę z ryzyka związanego z obcowaniem ze zwierzętami.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Jazda konna jest sportem obarczonym ryzykiem. W związku z tym jazdy odbywają się tylko i wyłącznie w kaskach, a w przypadku dzieci w kaskach i kamizelkach ochronnych. Instruktorzy oraz stajnia są ubezpieczeni. Jeźdźcy powinni posiadać własne ubezpieczenie NNW.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Jedynymi osobami decyzyjnymi w stajni i na jej terenie są Instruktorzy. Jeźdźcy/rodzice nie mają wpływu na wybór konia do jazdy.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">W stajni oraz na jej terenie należy zachowywać się cicho i spokojnie. W taki sposób, aby nie płoszyć koni.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Osoby niepełnoletnie mogą przebywać w stajni i na jej terenie tylko pod opieką opiekuna.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Osoby niepełnoletnie potrzebują pisemnej zgody Opiekuna na jazdę konną.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">W trakcie jazdy konnej opiekę nad jeźdźcami przejmuje Instruktor, jednak nie zwalnia to rodziców z odpowiedzialności za dzieci.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Należy dbać o dobrostan koni. Wszelkie otarcia, zmiany skórne, rany należy od razu zgłaszać do Instruktora.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Należy dbać i szanować udostępniany sprzęt jeździecki, odkładać go na wyznaczone miejsce. Wszelkie zniszczenia należy od razu zgłaszać do Instruktora.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Należy dbać o porządek w stajni.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Stajnia nie ponosi odpowiedzialności za rzeczy pozostawione na jej terenie.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>

                        <p className="single-regulation">Zabrania się:</p>
                        <p className="single-forbidden-info">- Palenia tytoniu w stajni</p>
                        <p className="single-forbidden-info">- Otwierania boksów koni bez zgody Instruktora</p>
                        <p className="single-forbidden-info">- Wchodzenia do koni na pastwiska/padoki</p>
                        <p className="single-forbidden-info">- Dokarmiania koni bez zgody Instruktora</p>
                        <p className="single-forbidden-info">- Używania sprzętu bez zgody Instruktora</p>
                        <p className="single-forbidden-info">- Wchodzenia na ujeżdżalnię osób trzecich</p>
                    
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">W stajni obowiązuje stały grafik jazd. Wszelkie zmiany należy zgłaszać poprzez SMS lub telefon. 665 246 359.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Jazdy odbywają się bez względu na warunki atmosferyczne.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Instruktor ma prawo do odwołania jazd bez podania przyczyny w wyjątkowych sytuacjach.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Odwołanie jazdy przez klienta później niż 24 h przed jej planowanym termin skutkuje koniecznością wpłaty 50 % jej wartości lub skreśleniem z karnetu. Bez względu na przyczynę odwołania.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Jazdy należy opłacać gotówką lub przelewem. Najbardziej korzystną formą płatności jest wykupienie karnetu.</p>
                        <img className="regulation-star" src={Star} alt="gwiazdka"/>
                        <p className="single-regulation">Wszelkie pytania i niejasności należy kierować do Instruktorów.</p>

                        <p id="regulations-actualization-info">Aktualizacja regulaminu 19.01.2021</p>
        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Regulations;