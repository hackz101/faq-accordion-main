document.querySelectorAll('section')
  .forEach((section, index) => {
    const expandButton = section.querySelector('img');

    expandButton.addEventListener('click', () => {
      const isExpanded = expandButton.classList.contains('js-section-expanded');
      expandButton.classList.toggle('js-section-expanded');

      if (isExpanded !== true) {
        section.insertAdjacentHTML('beforeend', getParagraphBySectionId(index));
        expandButton.src = '/assets/images/icon-minus.svg';
      } else {
        section.removeChild(section.querySelector('p'));
        expandButton.src = '/assets/images/icon-plus.svg';
      }
    });
  });

  function getParagraphBySectionId(sectionId) {
    if (sectionId === 0) {
      return `
      <p>
        Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.
      </p>
      `;
    } else if (sectionId === 1) {
      return `
      <p>
        Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
        option providing access to a range of projects suitable for all skill levels.
      </p>
      `;
    } else if (sectionId === 2) {
      return `
      <p>
        Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
        way to showcase your skills to potential employers!
      </p>
      `;
    } else if (sectionId === 3) {
      return `
      <p>
        The best place to get help is inside Frontend Mentor's Discord community. There's a help 
        channel where you can ask questions and seek support from other community members.
      </p>
      `;
    }

    return '';
  }