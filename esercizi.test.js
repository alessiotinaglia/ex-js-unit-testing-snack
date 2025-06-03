const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require("./esercizi");


describe('Manipolazione di stringhe', () => {

    // 🏆 Snack 1
    // 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInitials("Mario Rossi")).toBe("MR");
        expect(getInitials("Luca Bianchi")).toBe("LB");
    });

    // 🏆 Snack 5
    // 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome("anna")).toBeTruthy();
        expect(isPalindrome("casa")).toBeFalsy();        
    });
});


describe('Operazioni su array', () => {

    // 🏆 Snack 3
    // 👉 "La funzione average calcola la media aritmetica di un array di numeri."

    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([2, 4, 6])).toBe(4);
        expect(average([10, 20, 30, 40])).toBe(25);
    });

    // 🏆 Snack 7
    // 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

    const posts = [
        { id: 1, title: "Titolo 1", slug: "titolo-1" },
        { id: 2, title: "Guida JavaScript", slug: "guida-javascript" }
    ];

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Titolo 1", slug: "titolo-1" });
        expect(findPostById(posts, 3)).toBe(null);
        expect(() => findPostById(posts, "Hello")).toThrow("non e un id");
        expect(() => findPostById([55, 79], 2)).toThrow();
    });
});


describe("Generazione di Slug", () => {

    // 🏆 Snack 2
    // 👉 "La funzione createSlug restituisce una stringa in lowercase."

    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("Questo È Un Test")).toBe("questo-è-un-test");
    });

    // 🏆 Snack 4
    // 👉 "La funzione createSlug sostituisce gli spazi con -."

    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug("Titolo MOLTO lungo")).toBe("titolo-molto-lungo");
    });

    // 🏆 Snack 6
    // 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow();
        expect(() => createSlug(null)).toThrow();
        expect(() => createSlug("     ")).toThrow();
    });
});
