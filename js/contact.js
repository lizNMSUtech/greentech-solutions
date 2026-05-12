/* ============================================================
   GreenTech Solutions — contact.js

   Handles two independent forms on the Contact page:
   1. Main contact form — real-time validation + success state
   2. Newsletter signup — email validation + success state

   Validation rules:
   - name:    required, 2+ characters
   - email:   required, valid format (RFC-ish regex)
   - subject: required, must not be the placeholder option
   - message: required, 20+ characters

   No frameworks. Vanilla ES6.
   ============================================================ */

(function () {
  'use strict';

  /* ---- Helpers ---- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function getField(id)   { return document.getElementById(id); }
  function getError(id)   { return document.getElementById(id + '-error'); }

  /**
   * Mark a field as valid or invalid, show/hide its error message.
   * @param {HTMLElement} field
   * @param {boolean}     valid
   * @param {string}      [msg]  Error text to show when invalid
   */
  function setValidity(field, valid, msg) {
    field.classList.toggle('is-valid',   valid);
    field.classList.toggle('is-invalid', !valid);

    const errEl = getError(field.id);
    if (errEl) {
      errEl.textContent = msg || '';
      errEl.classList.toggle('visible', !valid);
    }
  }

  /* ---- Validators ---- */
  function validateName(field) {
    const v = field.value.trim();
    if (!v)          return setValidity(field, false, 'Please enter your name.'), false;
    if (v.length < 2) return setValidity(field, false, 'Name must be at least 2 characters.'), false;
    setValidity(field, true);
    return true;
  }

  function validateEmail(field) {
    const v = field.value.trim();
    if (!v)               return setValidity(field, false, 'Please enter your email address.'), false;
    if (!EMAIL_RE.test(v)) return setValidity(field, false, 'Please enter a valid email address.'), false;
    setValidity(field, true);
    return true;
  }

  function validateSubject(field) {
    if (!field.value || field.value === '') {
      setValidity(field, false, 'Please choose a subject.');
      return false;
    }
    setValidity(field, true);
    return true;
  }

  function validateMessage(field) {
    const v = field.value.trim();
    if (!v)            return setValidity(field, false, 'Please write your message.'), false;
    if (v.length < 20) return setValidity(field, false, `Message too short (${v.length}/20 characters minimum).`), false;
    setValidity(field, true);
    return true;
  }

  /* ---- Main Contact Form ---- */
  function initContactForm() {
    const form    = document.getElementById('contact-form');
    if (!form) return;

    const nameField    = getField('name');
    const emailField   = getField('email');
    const subjectField = getField('subject');
    const messageField = getField('message');
    const submitBtn    = document.getElementById('submit-btn');
    const successMsg   = document.getElementById('form-success');

    // Real-time validation on blur (when user leaves a field)
    nameField.addEventListener('blur',    () => validateName(nameField));
    emailField.addEventListener('blur',   () => validateEmail(emailField));
    subjectField.addEventListener('change', () => validateSubject(subjectField));
    messageField.addEventListener('blur', () => validateMessage(messageField));

    // Also validate on input so errors clear as soon as the user fixes them
    nameField.addEventListener('input',    () => { if (nameField.classList.contains('is-invalid'))    validateName(nameField);    });
    emailField.addEventListener('input',   () => { if (emailField.classList.contains('is-invalid'))   validateEmail(emailField);  });
    messageField.addEventListener('input', () => { if (messageField.classList.contains('is-invalid')) validateMessage(messageField); });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validate all fields on submit
      const ok = [
        validateName(nameField),
        validateEmail(emailField),
        validateSubject(subjectField),
        validateMessage(messageField)
      ].every(Boolean);

      if (!ok) {
        // Move focus to the first invalid field for accessibility
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Simulate submission (no backend — this is a course project)
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(function () {
        form.style.display = 'none';
        successMsg.classList.add('visible');
        successMsg.focus(); // Move focus to success message for screen readers
      }, 800);
    });
  }

  /* ---- Newsletter Form ---- */
  function initNewsletterForm() {
    const form      = document.getElementById('newsletter-form');
    if (!form) return;

    const emailInput  = document.getElementById('newsletter-email');
    const submitBtn   = document.getElementById('newsletter-btn');
    const successMsg  = document.getElementById('newsletter-success');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const v = emailInput.value.trim();
      if (!v || !EMAIL_RE.test(v)) {
        emailInput.classList.add('is-invalid');
        emailInput.focus();
        emailInput.setAttribute('aria-invalid', 'true');
        return;
      }

      emailInput.classList.remove('is-invalid');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing…';

      setTimeout(function () {
        form.style.display = 'none';
        successMsg.classList.add('visible');
      }, 600);
    });

    // Clear invalid state on input
    emailInput.addEventListener('input', function () {
      emailInput.classList.remove('is-invalid');
      emailInput.removeAttribute('aria-invalid');
    });
  }

  // Init both forms once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initContactForm();
      initNewsletterForm();
    });
  } else {
    initContactForm();
    initNewsletterForm();
  }
})();
