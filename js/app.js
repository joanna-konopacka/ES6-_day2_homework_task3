/*Zadanie 3

Stwórz funkcję sayHello, której celem będzie wypisanie Hello dla wszystkich jej parametrów. Parametry powinny być stringami. Wykorzystaj Rest/Spread operator.
Spróbuj posłużyć się jedną z metod (forEach, map lub reduce).

Przykładowe wywołania:
sayHello("Ania", "Kasia", "Steve", "Bogumił");

Wynik w konsoli:
Hello: Ania
Hello: Kasia
Hello: Steve
Hello: Bogumił */

const sayHello = (...names) => {
	names.forEach((name) => console.log(`Hello: ${name}`));
};

sayHello("Antonina", "Józefina", "Petronela");
