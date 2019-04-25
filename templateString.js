const firstName = 'Tushar';
const lastName = 'Diwan';
const age = 28;
const job = 'web developer';
const city = 'Pune';


let html;

//without template string
// html = '<ul><li>'+ firstName + '</li> <li>'+ firstName + '</li> <li>'+ lastName + '</li><li>'+ age + '</li><li>'+ job + '</li></ul>';

//Using template string

html = `<ul>
<li>${firstName}</li>
<li>${lastName}</li>
<li>${age}</li>
<li>${job}</li>
<li>${city}</li>
</ul>`



document.body.innerHTML = html;

