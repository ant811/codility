function solution(N, P, Q) {
  let primeSieve = new Array(N + 1).fill(true);
  for (let i = 2; i <= N; i++) {
    if(primeSieve[i]) {
      for (let j = Math.pow(i, 2); j <= N; j+=i) {
        primeSieve[j] = false;
      }
    }
  }

  const primes = primeSieve.reduce((primesArr, bool, index)=> {
    if (bool === true && index > 1) {
      primesArr.push(index);
    }
    return primesArr;
  }, []);
  
  const semiPrimeSieve = new Array(N + 1).fill(0);
  for (let i = 0; i < primes.length; i++) {
    let prime = primes[i];
    let j = i;
    while (primes[j] * prime <= N) {
      let semiPrime = primes[j] * prime;
      semiPrimeSieve[semiPrime] = 1;
      j++;
    }
  }

  const semiPrimeCounter = [semiPrimeSieve[0]];
  for (let i = 1; i < semiPrimeSieve.length; i++) {
    semiPrimeCounter.push(semiPrimeCounter[i - 1] + semiPrimeSieve[i]);
  }

  const result = [];
  for (let i = 0; i < P.length; i++) {
    result.push(semiPrimeCounter[Q[i]] - semiPrimeCounter[P[i]] + semiPrimeSieve[P[i]]);
  }

  return result;
}

// Time complexity: O(n * log(log(n)) + m)

module.exports = { solution };
