const data = [
    {
        name: "Shubham Rajput",
        age: 20,
        city: "Bareilly",
        language: "javaScript",
        framework: "React",
        image: "https://randomuser.me/api/portraits/men/75.jpg"
    },

    {
        name: "Chanu Rajput",
        age: 19,
        city: "Bareilly",
        language: "Python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/women/75.jpg"
    },

    {
        name: "Vanya Sri",
        age: 20,
        city: "Lucknow",
        language: "java",
        framework: "jQuery",
        image: "https://randomuser.me/api/portraits/women/76.jpg"
    },

    {
        name: "Atul Yadav",
        age: 21,
        city: "Lucknow",
        language: "CPP",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/76.jpg"
    },

    {
        name: "Tejveer Singh",
        age: 21,
        city: "Ghaziabad",
        language: "javaScript",
        framework: "nodeJs",
        image: "https://randomuser.me/api/portraits/men/77.jpg"
    }
]

// iterator
function cvIterator(profile) {
    let nextIndex = 0;
    return {
        next: () => {
            return nextIndex < profile.length ? { value: profile[nextIndex++], done: false } : { done: true }
        }
    }
}

const candidates = cvIterator(data)
nextProfile();

// eventlistener
let next = document.getElementById("next")
next.addEventListener("click", nextProfile)


function nextProfile() {
    let currentCandidate = candidates.next().value
    let image = document.getElementById("img")
    let profile = document.getElementById("profile")
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">Age: ${currentCandidate.age}</li>
    <li class="list-group-item">Lives In: ${currentCandidate.city}</li>
    <li class="list-group-item">Language works on: ${currentCandidate.language}</li>
    <li class="list-group-item">Uses: ${currentCandidate.framework}</li>
  </ul>`
    }

    else{
        alert("End of Candidate Applications")
        window.location.reload()
    }


}