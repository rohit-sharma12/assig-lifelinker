 const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
      acc.addEventListener('click', () => {
        acc.classList.toggle('active');
        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });

document.querySelector('.load-more').addEventListener('click', () => {
    alert("You can load more FAQs dynamically from a server or add more here!");
});