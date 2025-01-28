<script>
    function startDailyCountdown(targetHour, targetMinute, targetSecond) {
        const timerElement = document.getElementById('timer');

        function updateTimer() {
            const now = new Date();
            const targetTime = new Date();

            // Set the target time to the specified hour, minute, and second
            targetTime.setHours(targetHour, targetMinute, targetSecond, 0);

            // If the target time has already passed today, set it for tomorrow
            if (now > targetTime) {
                targetTime.setDate(targetTime.getDate() + 1);
            }

            const timeDifference = targetTime - now;

            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);

            // Update the timer display
            timerElement.textContent = 
                `${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
        }

        // Start the timer
        updateTimer();
        setInterval(updateTimer, 1000);
    }

    // Start the countdown timer for a target time of 8:00 PM
    startDailyCountdown(22, 0, 0); // 20:00:00
</script>
