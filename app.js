// selecting all the links
const links = document.querySelectorAll(".link");

// selecting all the sections
const sections = document.querySelectorAll("section");

// variable to track the active links
let activeLink = 0;

// for each method to loop through all the links
links.forEach((link, i) => {

    // adding click event for each link item
    link.addEventListener('click', () => {

        // condition to check whether the active link is not equal to i, bc we don't want to perform anything if we click on the same active link
        if(activeLink != i){

            // selecting the active link from links index
            // class list .remove will remove the active class from it
            links[activeLink].classList.remove('active');

            // then add the active class to the clicked link
            link.classList.add('active');

            // removes active class from the section
            sections[activeLink].classList.remove('active');

            // set timeout set to 1000 milliseconds
            setTimeout(() => {
                // active link set to clicked index
                activeLink = i;

                // adds active class to the i index of section elements
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})