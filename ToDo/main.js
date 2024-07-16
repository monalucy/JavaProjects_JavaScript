document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to handle task completion
    const tasks = document.querySelectorAll('.task input[type="checkbox"]');
    tasks.forEach(task => {
        task.addEventListener('change', function() {
            const listItem = this.parentElement;
            if (this.checked) {
                listItem.classList.add('completed');
            } else {
                listItem.classList.remove('completed');
            }
        });
    });
});