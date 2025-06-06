function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function generatePrimes() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const output = document.getElementById('output');
    output.value = '';

    if (isNaN(start) || isNaN(end) || start > end) {
        output.value = 'Please enter valid range (start <= end)';
        return;
    }

    let result = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
                result.push(i);
        }
    }

    output.value = result.join(', ');
}
