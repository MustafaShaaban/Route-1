/**************************************************************
 *
 *                   Project Name : Bookmarking system
 *                   Copyright(c) ™ WMOH 2020.
 *                   Version       : 1.0.0
 *
 *
 ************************************************************/

/*   Project (Follow the order)
├── 1- Creating my vars
├── 2- my main function
│   ├── Validate user inputs > Alert if there're input mistakes
│   ├── 6-push all the values to my array just created.
│   ├── 12- Set the values on the local storage
│   ├── 9- invoke displayURLS to display the sites in the container
│   ├── 11- call the clear function after display	
│   └── 20- hide the alerts
│		
├── 3- creating object contains the input values
├── 4- Create new event after clicking on submit to invoke my main function
├── 5- creating an empty array to get all the object values
├── 6- push all the values to my array just created.
├── 7- Display My inputs on my main HTML Area
│   ├── 8- add my var which contain and increment all user inputs to the HTML container
│   └── 9- invoke displayURLS to display the sites in the HTML container.
│	
├── 10- Create Clear function
├── 13- Check if there're a stored values or not
│   ├── if no  => start with an empty array
│   └── if yes => start with the stored data by getItem method.	
│
├── 14- Del function
├── 15- add event to the del button
├── 16- Creating function to add http or https to the url.
├── 17- Validate the name and the url by creating functions
└── 18- Creating function to listen to the keypress and convert enter to submit
*/

//  1- Creating my vars

var siteNameInput = document.getElementById("name-input");
var siteUrlInput = document.getElementById("site-input");
var addBtn = document.getElementById("new-submit");
var delBtn = document.getElementById("deletesite");
var nameExist = document.getElementById("name-exist");
var siteExist = document.getElementById("URL-exist");

// 13 - Check if there're a stored values or not
if (localStorage.getItem("myBookesSites") == null) {
	siteUrls = [];
} else {
	siteUrls = JSON.parse(localStorage.getItem("myBookesSites"));
	// then display the storage values
	displayUrls();
}
// 2- my main function
function addSite() {
	// validate Inputs
	var SName = siteNameInput.value;
	var ULink = siteUrlInput.value;
	if (validName(SName) && validUrl(ULink)) {
		appendHttps();
		// 3- creating object contains the input values
		var siteInfo = {
			name: siteNameInput.value,
			url: siteUrlInput.value,
		};
		// 6- push all the values to my array
		siteUrls.push(siteInfo);
		//12- Set the values on the local storage
		localStorage.setItem("myBookesSites", JSON.stringify(siteUrls));
		//9- invoke displayURLS to display the sites in the container
		displayUrls();
		//11- call the clear function after display
		clearForm();
		//20- hide the alert
		hideFn();
	} else {
		if (validName(SName) != true) {
			nameExist.style.cssText = "display:block !important";
		}
		if (validName(ULink) != true) {
			siteExist.style.cssText = "display:block !important";
		}
		if (SName == null || ULink == null) {
			alert("These fieds are required");
			return false;
		}
		if (SName == "" || ULink == "") {
			alert("Name and Url must be filled out");
			return false;
		}
	}
}

// 4- new event after clicking on submit
addBtn.addEventListener("click", addSite);

// 5- creating an empty array to get all the object values
var siteUrls = [];
//var siteUrls;

/* 
function validateInputs() {
	for (var i = 0; i < siteUrls.length; i++) {
		if (siteUrls[i].name.toLowerCase() == siteNameInput.value.toLowerCase()) {
			nameExist.style.cssText = "display:block !important";
		} else if (
			siteUrls[i].url.toLowerCase() == siteUrlInput.value.toLowerCase()
		) {
			siteExist.style.cssText = "display:block !important";
		} else {
			return true;
		}
	}
} */

// 17- Validate the name and the url by creating functions
// validate the name
function validName(x) {
	if (x == "" || x == null) {
		return false;
	}
	for (var i = 0; i < siteUrls.length; i++) {
		if (siteUrls[i].name.toLowerCase() === x.toLowerCase()) return false;
	}
	return true;
}

// validate the url
function validUrl(y) {
	if (y == "" || y == null) {
		return false;
	}
	for (var i = 0; i < siteUrls.length; i++) {
		if (siteUrls[i].url === y) return false;
	}
	return true;
}

// 20- Hide the alert msg
function hideFn() {
	nameExist.style.cssText = "display:none !important";
	siteExist.style.cssText = "display:none !important";
}

// 7- Display My inputs on my main Area
function displayUrls() {
	var sites = "";
	for (let i = 0; i < siteUrls.length; i++) {
		sites += `<div class="col-12 col-md-6 my-2">
                    <div class="name-site d-flex justify-content-around align-items-center">
                        <div class="img-name col-7">
							<div class="favicon"><img src="${getIco(i)}" class="img-fluid"></div>
							<h5 class="ml-2 text-capitalize mx-2">${siteUrls[i].name}</h5>
						</div>
                        <div class="visit-site  text-center col-3">
                            <a href="${
															siteUrls[i].url
														}" class="btn btn-primary btn-sm " type="button"
                                target="_blank">visit<i class="icon-logout mx-1"></i></a>
                        </div>
                        <div class="del-site text-center col-2">
                            <button class="btn btn-danger btn-sm" type="button" onclick="delUrl(${i})"><i
                                    class="icon-trash mx-1"></i></button>
                        </div>
                    </div>
                </div>`;
	}
	// 8- add my var which contain all user inputs to the HTML container
	document.getElementById("info-container").innerHTML = sites;
	//console.log(siteUrls);
}

// 10- Create Clear function
function clearForm() {
	(siteNameInput.value = ""), (siteUrlInput.value = "");
}

//14- Del function
function delUrl(i) {
	siteUrls.splice(i, 1);
	localStorage.setItem("myBookesSites", JSON.stringify(siteUrls));
	displayUrls();
}

//15- add event to the del button
// Added the event to the HTML code in the Js file.

//16- Creating function to add http or https to the url
function appendHttps() {
	if (
		siteUrlInput.value.includes("https://") ||
		siteUrlInput.value.includes("http://")
	) {
		siteUrlInput.value = siteUrlInput.value;
	} else {
		siteUrlInput.value = "https://" + siteUrlInput.value;
	}
}

// 18- Enter to add
document.addEventListener("keypress", function (e) {
	if (e.keyCode == 13) {
		addSite();
	}
});

// This function will cut any url so we can get the favicon path correctly.

function getIco(w) {
	var str = siteUrls[w].url;
	var sitesExtentions = [".com", ".net", ".co", ".org", ".gov", "info"];
	for (let i = 0; i < sitesExtentions.length; i++) {
		if (str.includes(sitesExtentions[i])) {
			var comLocation = str.search(sitesExtentions[i]);
			var extract = str.slice(comLocation);
			var res = str.replace(extract, `${sitesExtentions[i]}/favicon.ico`);
			return res;
		}
	}
}
