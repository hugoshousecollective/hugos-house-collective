export default function Home(){
return (
<>
<nav>
<div><strong>HUGO'S HOUSE COLLECTIVE</strong></div>
<div>
<a href="#">The House</a>
<a href="#">Collections</a>
<a href="#">Journal</a>
<a href="#">Contact</a>
</div>
</nav>

<div className="hero">
<div>
<h1>For deeply loved dogs.</h1>
<p>
Thoughtfully selected products, places and experiences designed to bring comfort,
calmness and intentional living into everyday life.
</p>
<a className="button" href="#">Enter the House</a>
</div>
</div>

<section>
<h2>The House Standard</h2>
<div className="cards">
<div className="card"><h3>Comfort</h3><p>Everything should improve daily life.</p></div>
<div className="card"><h3>Calmness</h3><p>Quiet design over noise.</p></div>
<div className="card"><h3>Material Integrity</h3><p>Quality that lasts.</p></div>
<div className="card"><h3>Intentional Design</h3><p>Every detail has purpose.</p></div>
</div>
</section>

<footer>
<h3>Hugo's House Collective</h3>
<p>Curated living for deeply loved dogs.</p>
</footer>
</>
);
}
