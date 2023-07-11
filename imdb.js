let buton = document.getElementById ("btn") ;
buton.addEventListener("click", function (){
	let search_bar=document.getElementById("input").value;

	const get_movie = new XMLHttpRequest();
	get_movie.open('GET',`http://www.omdbapi.com/?t=${search_bar}&apikey=a9399a17`);
	get_movie.onload= function(){
		let resp = JSON.parse(get_movie.responseText);
		console.log(resp);
		
		let title = document.getElementById ("title") ;
		let dierector = document.getElementById ("dierector") ;
		let year = document.getElementById ("year") ;
		let actor = document.getElementById ("actor") ;
		let rating = document.getElementById ("rating") ;
		let language = document.getElementById ("language") ;
		let genre = document.getElementById ("genre") ;

		title.innerHTML='Title  = '+resp.Title;
		year.innerHTML='Year = '+resp.Year;
		dierector.innerHTML='Dierector = '+resp.Director;
		actor.innerHTML='Actor = '+resp.Actors;
		rating.innerHTML='Rating = '+resp.Ratings[0].Value;
		language.innerHTML='Language = '+resp.Language;
		genre.innerHTML='Genre = '+resp.Genre;
			
    }
	get_movie.send();

});



    








    





