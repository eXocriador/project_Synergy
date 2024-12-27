// Імпортуємо бібліотеку Accordion
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const faqContainer = document.querySelector('.container-faq');
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqContainer && faqItems.length > 0) {
    const accordion = new Accordion(faqContainer, {
      elementClass: 'faq-item',
      triggerClass: 'h3',
      contentClass: 'p',
      openOnInit: [],
    });

    faqItems.forEach(item => {
      const toggleButton = item.querySelector('.faq-toggle');
      const content = item.querySelector('p');
      const icon = item.querySelector('.faq-icon');

      // Виправлення початкового стану іконок
      const toggleButton = document.querySelector('.toggle-button');
      const content = document.querySelector('.content');
      const icon = document.querySelector('.icon');
      toggleButton.addEventListener('click', function () {
        // Toggle the display of the content
        if (content.style.display === 'none' || content.style.display === '') {
          content.style.display = 'block';
          icon.classList.add('rotated');
        } else {
          content.style.display = 'none';
          icon.classList.remove('rotated');
        }
      });

      // Додаємо обробник для заголовків
      const header = item.querySelector('h3');
      header.addEventListener('click', function () {
        if (content.style.display === 'none' || content.style.display === '') {
          content.style.display = 'block';
          icon.innerHTML =
            '<use xlink:href="./img/icons.svg#icon-arrow-top"></use>';
        } else {
          content.style.display = 'none';
          icon.innerHTML =
            '<use xlink:href="./img/icons.svg#icon-arrow-bot"></use>';
        }
      });
    });
  } else {
    console.error('FAQ container or items not found in the DOM');
  }
});
