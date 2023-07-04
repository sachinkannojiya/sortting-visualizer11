let bars = [];
const def = "#fd0081", chng = "#431f91", finished = "#8ef511", selected = "yellow";

window.onload = setup();
async function setup() {
	let b = document.getElementById("bars");
	let d = document.getElementById("delay");
	document.getElementById("b").innerText = b.value;
	document.getElementById("d").innerText = d.value + "ms";

	if (bars.length != parseInt(b.value)) {
		generateBars(parseInt(b.value));
	}
}


function reset() {
	location.reload();
}
