// Thoughts page filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const thoughtCards = document.querySelectorAll('.thought-card');
    const thoughtsEmpty = document.querySelector('.thoughts-empty');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            let visibleCount = 0;
            thoughtCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Show/hide empty message
            if (visibleCount === 0) {
                thoughtsEmpty.style.display = 'block';
            } else {
                thoughtsEmpty.style.display = 'none';
            }
        });
    });
});

