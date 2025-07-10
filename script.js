document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix');
    let count = 0;

    const increment = target / 100;

    const update = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.floor(count) + suffix;
        requestAnimationFrame(update);
      } else {
        counter.innerText = target.toLocaleString() + suffix;
      }
    };

    update();
  });
});


