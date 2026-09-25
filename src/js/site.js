    document.addEventListener('DOMContentLoaded', function () {
      const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
      const items = document.querySelectorAll('.portfolio-item');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
          const filter = this.getAttribute('data-filter');

          // Aggiorna classi bottoni
          filterBtns.forEach(b => {
            b.classList.remove('bg-[#486b85]', 'text-white', 'shadow-sm');
            b.classList.add('text-slate-400');
          });
          this.classList.add('bg-[#486b85]', 'text-white', 'shadow-sm');
          this.classList.remove('text-slate-400');

          // Filtra elementi
          items.forEach(item => {
            const categories = item.getAttribute('data-category') || '';
            if (filter === 'all' || categories.includes(filter)) {
              item.style.display = 'flex';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });

      // Invio reale del form di contatto tramite FormSubmit.co (nessun backend necessario)
      const contactForm = document.getElementById('contact-form');
      const statusBox = document.getElementById('contact-status');
      const errorBox = document.getElementById('contact-error');

      if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
          e.preventDefault();
          statusBox.classList.add('hidden');
          errorBox.classList.add('hidden');

          const submitBtn = contactForm.querySelector('button[type="submit"]');
          const originalBtnHtml = submitBtn.innerHTML;
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Invio in corso...</span>';

          try {
            const formData = new FormData(contactForm);
            // ⚠️ Sostituisci l'indirizzo email qui sotto con la tua email reale se diversa
            const response = await fetch('https://formsubmit.co/ajax/info@digriisproject.it', {
              method: 'POST',
              headers: { 'Accept': 'application/json' },
              body: formData
            });

            if (response.ok) {
              statusBox.classList.remove('hidden');
              contactForm.reset();
            } else {
              throw new Error('Invio fallito');
            }
          } catch (err) {
            errorBox.classList.remove('hidden');
          } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHtml;
          }
        });
      }
    });
