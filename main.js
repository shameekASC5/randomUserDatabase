let datas;

fetch ("https://randomuser.me/api?results=75")
    .then (function (response) {
        let json = response.json();
        // console.log(json);
        return json;
    })
    .then (function (myJson) {
        datas = myJson;
        return datas;
    })
    .then (function (myJson) {
        let data = myJson;
        for (let i = 0; i < data.results.length; i++) {
            let firstName = data.results[i].name.first;
            let firstNameWCap = firstName.substring(0,1).toUpperCase() + firstName.substring(1).toLowerCase();
            let lastName = data.results[i].name.last;
            let lastNameWCap = lastName.substring(0,1).toUpperCase() + lastName.substring(1).toLowerCase();
            let name = `${firstNameWCap} ${lastNameWCap}`;
            let email = data.results[i].email;
            let age = data.results[i].dob.age;
            let streetAddress = data.results[i].location.street;
            let city = data.results[i].location.city;
            let state = data.results[i].location.state;
            let homeAddress = `${streetAddress}, ${city}, ${state}`;
            let phoneNumber = data.results[i].cell;
            let personPhoto = data.results[i].picture.large;
            //New box div
            const createNewDiv = document.createElement("div");
        
            //Img to go in div 
            const createImg = document.createElement("img"); 
        
            //Header tag for name and age
            const createHeaderTag = document.createElement("h2");
        
            //Header tag for email address, location and phone number
            const createHeaderTagForOtherInfo = document.createElement("h3");  
        
            //Centers all information
            const centerElement = document.createElement("center");
        
            //Pushing divs to html file, gives unique id and class name
            document.getElementById("main_container").appendChild(createNewDiv);
            document.getElementsByTagName("div")[1+i].id = i;
            document.getElementById(`${i}`).classList.add("information_box");
        
            //Pushing img & header tags into new div and centers everything
            document.getElementById(`${i}`).appendChild(centerElement);
            document.getElementsByTagName("center")[1+i].appendChild(createImg);
            document.getElementsByTagName("center")[1+i].appendChild(createHeaderTag);
            document.getElementsByTagName("center")[1+i].appendChild(createHeaderTagForOtherInfo);
            document.getElementsByTagName("center")[1+i].appendChild(document.createElement("h4"));
            document.getElementsByTagName("center")[1+i].appendChild(document.createElement("h5"));
        
            //Pushs name into h2 element
            const newDiv = document.getElementsByTagName("center")[1+i];
            newDiv.children[1].innerHTML = `${name}, ${age}`;
            //Pushs image into img element
            newDiv.children[0].classList.add("person_faceImg");
            newDiv.children[0].src = personPhoto;
            //Pushs email, homeAddress and phoneNumber to h2 elements/tags
            newDiv.children[2].innerHTML = `${email}`;
            newDiv.children[3].innerHTML = `${homeAddress}`;
            newDiv.children[4].innerHTML = `${phoneNumber}`;
            let searchBoxValue = document.getElementsByTagName("textarea")[0];

        }
    })
    .then (function () {
        let searchBoxValue = document.getElementsByTagName("input")[0];     
        for (let i = 0; i < 75; i++) {
             let newH2Value = document.getElementsByTagName("h2")[i].innerHTML.slice(0, -4);
            if (searchBoxValue.value === newH2Value) {
            console.log("PARTY NVR ENDS");
            }
        }
    });



