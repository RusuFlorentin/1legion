

const swiper = new Swiper('.swiper:not(.top-swiper, .bottom-swiper)', {
  slidesPerView: "auto",
        spaceBetween: 20,
        loop: true, 
        autoplay: {
            delay: 0, 
            disableOnInteraction: false,
        },
        speed: 2000, 
    });


const topSwiper = new Swiper('.top-swiper', {
  slidesPerView: "auto", 
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false, 
        },
        speed: 5000, 
    });

    const bottomSwiper = new Swiper('.bottom-swiper', {
  slidesPerView: "auto", 
        loop: true, 
        autoplay: {
            delay: 0, 
            disableOnInteraction: false, 
            reverseDirection: true,
        },
        speed: 5000,
        direction: 'horizontal',
      
    });




//Animate gradient following Mouse
        const animateElement = document.getElementById('animate');
        const borderElement = document.querySelector('.started-border');


        borderElement.addEventListener('mousemove', (e) => {
        const rect = borderElement.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  


        animateElement.style.transform = `translate(${x - animateElement.offsetWidth / 2}px, ${y - animateElement.offsetHeight / 2}px)`;
        });


        borderElement.addEventListener('mouseleave', () => {
        animateElement.style.transform = 'translate(0, 0)'; 
        });






        //FAQ
        document.addEventListener("DOMContentLoaded", () => {
          const questions = document.querySelectorAll(".faq .type .question");
        
          questions.forEach((question) => {
            question.addEventListener("click", () => {

        
              const answer = question.nextElementSibling;
              const arrow = question.querySelector(".arrow");
        

              if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                arrow.style.transform = "rotate(90deg)";
              } else {
                answer.classList.add('active');
                arrow.style.transform = "rotate(-90deg)";
              }

            });
          });
        });


        //menu-phone

        var menu_active = document.getElementById('menu-btn');
        var menu_phone = document.querySelector('.mobile-menu');
        var isMenuOpen = false; 
        
        menu_active.addEventListener('click', function () {
            if (isMenuOpen) {
                menu_phone.style.left = '-250px'; 
                isMenuOpen = false; 
            } else {
                menu_phone.style.left = '0px'; 
                isMenuOpen = true; 
            }
        });
        
        document.addEventListener('click', function (event) {
            var isClickInside = menu_phone.contains(event.target) || menu_active.contains(event.target);
        
            if (!isClickInside) {
                menu_phone.style.left = '-250px'; 
                isMenuOpen = false; 
            }
        });
        
        
        //slide images hover

        const mainImage = document.getElementById("main-image");
        const types = document.querySelectorAll(".type");
        
        let slideInterval;
        let currentIndex = 0;
        

        const images = [
          "assets/images/Bare Metal.png",
          "assets/images/First Image and for Virtual.png",
          "assets/images/Hidden Fees.png",
          "assets/images/VPU Servers.png",
          "assets/images/Secure data.png",
        ];
        

        function startSlideShow() {
          slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            mainImage.src = images[currentIndex]; 
          }, 1000); 
        }
        

        function stopSlideShow() {
          clearInterval(slideInterval);
        }
        

        types.forEach((type) => {
          type.addEventListener("mouseenter", () => {
            startSlideShow(); 
          });
        
          type.addEventListener("mouseleave", () => {
            stopSlideShow(); 
          });
        });
        





        