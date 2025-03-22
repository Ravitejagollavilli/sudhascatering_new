document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.item-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                console.log(`Selected: ${checkbox.value} - Category: ${checkbox.dataset.category}`);
            } else {
                console.log(`Unselected: ${checkbox.value}`);
            }
        });
    });
});
