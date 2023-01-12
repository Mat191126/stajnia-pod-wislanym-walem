import React, { useEffect } from "react";

function Prices() {
	useEffect(() => {
		const galleryContent = document.getElementById("scroll-to-element");
		galleryContent.scrollIntoView(true);
	});

	return (
		<>
			<p id="scroll-to-element"></p>
			<div id="prices-content">
				<h1 id="prices-header">Cennik</h1>
				<div id="single-rides-table">
					<h2>Jazdy Pojedyncze</h2>
					<table>
						<thead>
							<tr className='tr-head'>
								<th>Jazda</th>
								<th>Czas</th>
								<th>Cena</th>
							</tr>
						</thead>
						<tbody>
							<tr className='tr-body-1'>
								<td>Jazda dla początkujących (lonża)</td>
								<td>30 min</td>
								<td>65zł</td>
							</tr>
							<tr className='tr-body-1'>
								<td>Jazda indywidualna: jeżdziec i instruktor</td>
								<td>60 min</td>
								<td>120zł</td>
							</tr>
							<tr className='tr-body-1'>
								<td>Jazda w parze: 2 jeźdźców i instruktor</td>
								<td>60 min</td>
								<td>90zł /osoba</td>
							</tr>
							<tr className='tr-body-1'>
								<td>Jazda w terenie</td>
								<td>60 min</td>
								<td>90zł</td>
							</tr>
							<tr className='tr-body-1'>
								<td>Oprowadzanie na kucyku</td>
								<td>10 min</td>
								<td>35zł</td>
							</tr>
							<tr className='tr-body-1'>
								<td>Oprowadzanie + zajęcia z kucykiem dla maluchów</td>
								<td>ok 30 min</td>
								<td>65zł</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="membership-table">
					<h2>Karnety</h2>
					<table>
						<thead>
							<tr className='tr-head'>
								<th>Karnet</th>
								<th>Czas</th>
								<th>Ważność</th>
								<th>Cena</th>
							</tr>
						</thead>
						<tbody>
							<tr className='tr-body-2'>
								<td>Karnet Huculski 1</td>
								<td>8x 30min</td>
								<td>8 tygodni</td>
								<td>440zł</td>
							</tr>
							<tr className='tr-body-2'>
								<td>Karnet Huculski 2</td>
								<td>8x 30min</td>
								<td>4 tygodnie</td>
								<td>400zł</td>
							</tr>
							<tr className='tr-body-2'>
								<td>Karnet Albino 1</td>
								<td>8x 60min</td>
								<td>8 tygodni</td>
								<td>650zł</td>
							</tr>
							<tr className='tr-body-2'>
								<td>Karnet Albino 2</td>
								<td>8x 60min</td>
								<td>4 tygodnie</td>
								<td>620zł</td>
							</tr>
							<tr className='tr-body-2'>
								<td>Karnet Andaluzyjski</td>
								<td>12x 60min</td>
								<td>8 tygodni</td>
								<td>880zł</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div id="additional-info">
					<p>
						*Grafik jazd jest stały. Dodatkowe zapisy na jazdy odbywają się poprzez SMS z kilkudniowym
						wyprzedzeniem.
					</p>
					<p>
						**Odwołanie jazdy przez klienta później niż 24 h przed jej planowanym termin skutkuje
						koniecznością wpłaty 50 % jej wartości lub skreśleniem z karnetu. Bez względu na przyczynę
						odwołania.
					</p>
				</div>
			</div>
		</>
	);
}

export default Prices;

