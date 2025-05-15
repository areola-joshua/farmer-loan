document.addEventListener('DOMContentLoaded', function() {
    const loanForm = document.getElementById('loanForm');
    const resultDiv = document.getElementById('result');

    loanForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const attendedSchool = document.getElementById('school').value;
        const numberOfPlots = parseInt(document.getElementById('plots').value);
        const yearsOfExperience = parseInt(document.getElementById('years').value);
        const previousLoansPaid = document.getElementById('paidLoans').value;
        const hasSafeArea = document.getElementById('safeArea').value;
        const age = parseInt(document.getElementById('age').value);

        // Calculate eligibility score
        let score = 0;
        
        // School attendance adds 10 points if yes
        if (attendedSchool === 'Yes') score += 10;
        
        // Each plot adds 5 points (max 50 points)
        score += Math.min(numberOfPlots * 5, 50);
        
        // Each year of experience adds 2 points (max 30 points)
        score += Math.min(yearsOfExperience * 2, 30);
        
        // Paid previous loans adds 20 points
        if (previousLoansPaid === 'Yes') score += 20;
        
        // Safe storage area adds 15 points
        if (hasSafeArea === 'Yes') score += 15;
        
        // Age between 25-55 adds points
        if (age >= 25 && age <= 55) score += 10;
        
        // Determine eligibility
        let message = '';
        let isEligible = false;
        
        if (score >= 80) {
            message = `Congratulations! You're eligible for a loan. Your score: ${score}/135`;
            isEligible = true;
        } else if (score >= 50) {
            message = `You're partially eligible. Your score: ${score}/135. Contact our team for more options.`;
            isEligible = true;
        } else {
            message = `Currently not eligible. Your score: ${score}/135. Try again after improving your farming setup.`;
        }
        
        // Display result
        resultDiv.textContent = message;
        resultDiv.style.display = 'block';
        resultDiv.style.backgroundColor = isEligible ? '#e8f5e9' : '#ffebee';
        resultDiv.style.color = isEligible ? '#2c5f2d' : '#c62828';
        resultDiv.style.border = isEligible ? '2px solid #2c5f2d' : '2px solid #c62828';
        
        // Scroll to result
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});