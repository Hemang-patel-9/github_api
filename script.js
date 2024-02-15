let avatar = document.getElementById("gavatar");
let gname = document.getElementById("gname");
let email = document.getElementById("gemail");
let locate = document.getElementById("glocation");
let create = document.getElementById("gcreate");
let profile = document.getElementById("gprofile");
let repo = document.getElementById("gtotalrepo");
let url = document.getElementById("gurl");

document.getElementById("inputval").addEventListener("keyup", async () => {
	let value = document.getElementById("inputval").value;

	const data = await fetch(`https://api.github.com/users/${value}`).then((res) => {
		return res.json();
	});

	console.log(data);

	if (data.avatar_url == null) {
		avatar = "./gtithub.png";
	}
	else {
		avatar = data.avatar_url;
	}
	if (data.name == null) {
		gname = "Unknown User";
	}
	else {
		gname = data.name;
	}
	if (data.email == null) {
		email = "Not Specified Yet";
	}
	else {
		email = data.email;
	}
	if (data.location == null) {
		locate = "Not Specified Yet";
	}
	else {
		locate = data.location;
	}
	if (data.created_at == null) {
		create = "Not Specified Yet";
	}
	else {
		create = data.created_at;
	}
	if (data.login == null) {
		profile = "Unknown User";
	}
	else {
		profile = data.login;
	}
	if (data.public_repos == null) {
		repo = "0";
	}
	else {
		repo = data.public_repos;
	}
	if (data.html_url == null) {
		url = "Not Specified";
	}
	else {
		url = data.html_url;
	}


	document.getElementById("gavatar").src = avatar;
	document.getElementById("gname").innerHTML = gname;
	document.getElementById("gemail").innerHTML = email;
	document.getElementById("glocation").innerHTML = locate;
	document.getElementById("gcreate").innerHTML = create;
	document.getElementById("gprofile").innerHTML = profile;
	document.getElementById("gtotalrepo").innerHTML = repo;
	document.getElementById("gurl").innerHTML = url;
});