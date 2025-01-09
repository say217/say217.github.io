
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const defaultBkg =
        "https://images.unsplash.com/photo-1729014697075-0eede8ab6eb6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const defaultPrimaryColor = "rgb(164, 16, 91)";

    cards.forEach((card) => {
        const backgroundUrl = card.getAttribute("data-bkg") || defaultBkg;
        const primaryColor =
            card.getAttribute("data-primarycolor") || defaultPrimaryColor;
        const readMoreButton = card.nextElementSibling;
        const readMoreOriginalBkg = readMoreButton.style.backgroundColor;

        card.style.backgroundImage = `linear-gradient(to bottom, rgba(75, 75, 75, 0.1), rgba(0, 0, 0, 0.5)), url('${backgroundUrl}')`;

        readMoreButton.addEventListener("mouseenter", () => {
            readMoreButton.style.backgroundColor = primaryColor;
        });
        readMoreButton.addEventListener("mouseleave", () => {
            readMoreButton.style.backgroundColor = readMoreOriginalBkg;
        });
    });

    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach((link) => {
        const parentWrapper = link.closest(".card-wrapper");
        const parentCard = parentWrapper.querySelector(".card");
        const paragraph = parentCard.querySelector("p");

        const isTruncated = paragraph.scrollHeight > paragraph.clientHeight + 1;

        /** If the text is short (!isTruncated) there is no need to
         ** animate the card with the translateY and rotate animation
         **/
        if (isTruncated) {
            link.addEventListener("mouseenter", () => {
                parentCard.classList.add("hovered");
                link.textContent = "Go to project";
            });

            link.addEventListener("mouseleave", () => {
                parentCard.classList.remove("hovered");
                link.textContent = "Read more";
            });
        } else {
            link.textContent = "Go to project";
        }

        /** In case you need to handle the click
         ** event to navigate to another page

         link.addEventListener("click", (e) => {
         e.preventDefault();
         });
         */
    });
});
