
function main() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        let index = 0;
        const wrapper = carousel.querySelector(".carousel-wrapper");
        const items = carousel.querySelectorAll(".carousel-item");
        const controls = carousel.querySelector(".carousel-controls");
        const leftBtn = carousel.querySelector(".control-left");
        const rightBtn = carousel.querySelector(".control-right");

        if (!items) return;

        function updateControls() {
            if (index === 0) {
                leftBtn.classList.add("control-disabled");
            } else {
                leftBtn.classList.remove("control-disabled");
            }

            if (index === items.length - 2) {
                rightBtn.classList.add("control-disabled");
            } else {
                rightBtn.classList.remove("control-disabled");
            }
        }

        function setItems() {
            items.forEach((item) => {
                item.style.left =
                    -(
                        controls.clientWidth * index +
                        (window.innerWidth >= 768 ? 24 : 36) * index
                    ) + "px";
                item.classList.remove("carousel-item-active", "fade-in");
            });

            items[index].classList.add("carousel-item-active", "fade-in");
        }

        if (leftBtn && rightBtn) {
            leftBtn.addEventListener("click", () => {
                if (index > 0 && index <= items.length) {
                    index--;
                    setItems();
                }

                updateControls();
            });

            rightBtn.addEventListener("click", () => {
                if (index >= 0 && index < items.length - 2) {
                    index++;
                    setItems();
                }

                updateControls();
            });
        }

        const resizeHandler = () => {
            carousel.classList.remove('carousel-transitions');
            setItems();
            carousel.classList.add('carousel-transitions');
        };

        setItems();
        updateControls();
        window.addEventListener('load', () => {
            setTimeout(() => {
                carousel.classList.add('carousel-transitions');
            }, 1000);
        });
        window.addEventListener("resize", resizeHandler);
    });

    // Fade-in effect for scrolling
    const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible'); // Optional: remove the class when out of view
            }
        });
    };

    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll(); // To handle elements already in view on page load
}

main();
