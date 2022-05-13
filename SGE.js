// BOTAO CANTO SUPERIOR DIREITO (DADOS DO USUARIO
function myFunction() {
	document.getElementById("caida").classList.toggle("show");
	}
	window.onclick = function(event) {
		if (!event.target.matches('.inside')) {
			var dropdowns = document.getElementsByClassName("opcoes");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		}
	}
		

