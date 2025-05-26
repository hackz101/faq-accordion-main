document.querySelectorAll('section')
  .forEach((section, index) => {
    const expandButton = section.querySelector('.js-expand-button');
    const faqHeader = section.querySelector('.js-faq-question');

    /*handle expand button*/
    expandButton.addEventListener('click', () => {
      const isExpanded = expandButton.classList.contains('js-section-expanded');
      console.log(isExpanded);
      toggleExpansion(section, index, expandButton, isExpanded);
    });

    /*handle faq focus*/
    faqHeader.addEventListener('keyup', (event) => {
      const isExpanded = expandButton.classList.contains('js-section-expanded');
      if (document.activeElement === faqHeader && event.key === 'Enter') {
        toggleExpansion(section, index, expandButton, isExpanded);
      }
    })

    /*handle faq click*/
    faqHeader.addEventListener('click', () => {
      const isExpanded = expandButton.classList.contains('js-section-expanded');
      toggleExpansion(section, index, expandButton, isExpanded);
    });

  });

/*opens and closes the response*/
function toggleExpansion(section, index, expandButton, isExpanded) {
  if (isExpanded !== true) {
    section.insertAdjacentHTML('beforeend', getParagraphBySectionId(index));
    expandButton.src = '/assets/images/icon-minus.svg';
  } else {
    section.removeChild(section.querySelector('p'));
    expandButton.src = '/assets/images/icon-plus.svg';
  }

  expandButton.classList.toggle('js-section-expanded');
}

/*response selection*/
function getParagraphBySectionId(sectionId) {
  if (sectionId === 0) {
    return `
    <p class="response">
      Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
      all levels and ideal for portfolio building.
    </p>
    `;
  } else if (sectionId === 1) {
    return `
    <p class="response">
      Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
      option providing access to a range of projects suitable for all skill levels.
    </p>
    `;
  } else if (sectionId === 2) {
    return `
    <p class="response">
      Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!
    </p>
    `;
  } else if (sectionId === 3) {
    return `
    <p class="response">
      The best place to get help is inside Frontend Mentor's Discord community. There's a help 
      channel where you can ask questions and seek support from other community members.
    </p>
    `;
  }

  return '';
}