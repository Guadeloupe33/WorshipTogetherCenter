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
const religionDropdown = document.getElementById('religion');
const denominationGroup = document.getElementById('denomination-group');
const denominationDropdown = document.getElementById('denomination');

// Map of religions to denominations/branches
const religionOptions = {
  christian: ['Baptist', 'Pentecostal', 'Catholic', 'Methodist', 'Non-Denominational', 'Other'],
  muslim: ['Sunni', 'Shia', 'Sufi', 'Other'],
  jewish: ['Orthodox', 'Conservative', 'Reform', 'Reconstructionist', 'Other'],
  hindu: ['Vaishnavism', 'Shaivism', 'Shaktism', 'Smartism', 'Other'],
  buddhist: ['Theravada', 'Mahayana', 'Vajrayana', 'Zen', 'Other'],
  sikh: ['Khalsa', 'Nanakpanthi', 'Other'],
  spiritual: ['Meditation-based', 'Universalist', 'Energy Healing', 'Other'],
  other: ['Other']
};

if (religionDropdown) {
  religionDropdown.addEventListener('change', function () {
    const selectedReligion = this.value;
    const branches = religionOptions[selectedReligion];

    if (branches) {
      denominationDropdown.innerHTML = '<option value="">-- Select Option --</option>';
      branches.forEach(branch => {
        const option = document.createElement('option');
        option.value = branch.toLowerCase().replace(/\s/g, '-');
        option.textContent = branch;
        denominationDropdown.appendChild(option);
      });
      denominationGroup.style.display = 'block';
    } else {
      denominationGroup.style.display = 'none';
    }
  });
}
document.querySelector("#personalForm form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  // Do form validation / backend call if needed

  // Redirect to homepage
  window.location.href = "homepage.html"; // change to your actual homepage filename
});


