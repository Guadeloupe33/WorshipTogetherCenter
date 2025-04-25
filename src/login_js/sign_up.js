document.addEventListener('DOMContentLoaded', function() {
  
  // Activate popovers (for birthday and gender info)
  document.addEventListener('DOMContentLoaded', function() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  });
  






  // Show additional fields if "Custom" gender selected
  function on_change(event) {
    const selectedOption = event.target.value;
    if (selectedOption === 'customSelect') {
      document.getElementById('text').style.display = 'block';
    } else {
      document.getElementById('text').style.display = 'none';
    }
  }

  // Form toggle logic with FADE IN
  const personalBtn = document.getElementById('personalBtn');
  const organizationBtn = document.getElementById('organizationBtn');
  const personalForm = document.getElementById('personalForm');
  const organizationForm = document.getElementById('organizationForm');

  function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';
    setTimeout(() => {
      element.style.transition = 'opacity 0.5s ease';
      element.style.opacity = 1;
    }, 10);
  }

  function hide(element) {
    element.style.display = 'none';
    element.style.opacity = 0;
  }

  if (personalBtn && organizationBtn && personalForm && organizationForm) {
    personalBtn.addEventListener('click', function() {
      fadeIn(personalForm);
      hide(organizationForm);
    });

    organizationBtn.addEventListener('click', function() {
      fadeIn(organizationForm);
      hide(personalForm);
    });
  }

});
