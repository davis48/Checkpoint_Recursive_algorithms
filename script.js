function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  function getTicketPrice(age) {
    if (age <= 12) {
      return 10;
    } else if (age >= 13 && age <= 17) {
      return 15;
    } else {
      return 20;
    }
  }
  

  function isPalindrome(str) {
    // Supprimer les espaces, la ponctuation et convertir en minuscules
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Fonction récursive pour vérifier le palindrome
    function checkPalindrome(s, start, end) {
      if (start >= end) {
        return true;
      }
      if (s[start] !== s[end]) {
        return false;
      }
      return checkPalindrome(s, start + 1, end - 1);
    }
  
    return checkPalindrome(str, 0, str.length - 1);
  }
  

  function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  

  